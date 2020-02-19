 var treeData = [
        {
            "name": "Top Level",
            "parent": "null",
            "children": [
                {
                    "name": "Level 2: A",
                    "parent": "Top Level",
                    "value" : 100,
                    "children": [
                        {
                            "name": "Son of A",
                            "parent": "Level 2: A",
                            "value" : 20,
                        },
                        {
                            "name": "Daughter of A",
                            "parent": "Level 2: A",
                            "value" : 10,
                        }
                    ]
                },
                {
                    "name": "Level 2: B",
                    "parent": "Top Level",
                    "value" : 30,
                }
            ]
        }
    ];


    wscale = d3.scale.linear()
        .range([0, 40])
        .domain([0, 100]);

    // ************** Generate the tree diagram	 *****************
    var margin = { top: 20, right: 120, bottom: 20, left: 120 },
        width = 960 - margin.right - margin.left,
        height = 500 - margin.top - margin.bottom;

    var i = 0,
        duration = 750,
        root;

    var tree = d3.layout.tree()
        .size([height, width]);

    var diagonal = d3.svg.diagonal()
        .projection(function (d) { return [d.y, d.x]; });

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    root = treeData[0];
    root.x0 = height / 2;
    root.y0 = 0;

    update(root);

    d3.select(self.frameElement).style("height", "500px");

    function update(source) {

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

        // Normalize for fixed-depth.
        nodes.forEach(function (d) { d.y = d.depth * 180; });

        // Update the nodes…
        var node = svg.selectAll("g.node")
            .data(nodes, function (d) { return d.id || (d.id = ++i); });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
            .on("click", click);

        nodeEnter.append("circle")
            .attr("r", 1e-6)
            .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

        nodeEnter.append("text")
            .attr("x", function (d) { return d.children || d._children ? -13 : 13; })
            .attr("dy", ".35em")
            .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
            .text(function (d) { return d.name; })
            .style("fill-opacity", 1e-6);

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

        nodeUpdate.select("circle")
            .attr("r", 10)
            .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
            .remove();

        nodeExit.select("circle")
            .attr("r", 1e-6);

        nodeExit.select("text")
            .style("fill-opacity", 1e-6);

        // Update the links…
        // var link = svg.selectAll("path.link")
        //     .data(links, function (d) { return d.target.id; });



        var link = svg.selectAll("path.link")
                    .data(links, function (d) {
                        return d.target["id"];
                    });

            var link_nested = d3.nest()
                    .key(function (d) {
                        return d.source["id"]
                    })
                    .entries(links);
                // 2. manual method for stacking since d3.layout.stack
                //      did not work
                
                link_nested.forEach(function (d) {
                    var ystacky = 0;
                    d.values.reverse().forEach(function (dd) {
                        var ywidth = wscale(dd.target.value)
                        var srcwidth = wscale(dd.source.value)
                        srcwidth = isNaN(srcwidth) ? wscale.range()[1] / 2 : srcwidth;
                        ystacky = ystacky + ywidth;
                        dd.x = dd.source.x + srcwidth / 2 - ystacky + ywidth / 2;
                        dd.y = dd.source.y;
                        dd.ystacky = ystacky;
                    })
                })



                 // Enter any new links at the parent's previous position.
                    link.enter().insert("path", "g")
                        .attr("class", "link")
                        .attr("d", function(d) {
                            var o = {x: source.x0, y: source.y0};
                            return diagonal({source: o, target: o});
                        });
      
                
        // // Enter any new links at the parent's previous position.
        // link.enter().insert("path", "g")
        //     .attr("class", "link")
        //     .attr("d", function (d) {
        //         var ystacky = 0;
        //         debugger;
        //         d.reverse().forEach(function (dd) {
        //            // debugger;
        //             var ywidth = wscale(dd.target.value)
        //             var srcwidth = wscale(dd.source.value)
        //             srcwidth = isNaN(srcwidth) ? wscale.range()[1] / 2 : srcwidth;
        //             ystacky = ystacky + ywidth;
        //             dd.x = dd.source.x + srcwidth / 2 - ystacky + ywidth / 2;
        //             dd.y = dd.source.y;
        //             dd.ystacky = ystacky;
        //         })

        //         // var o = { x: source.x0, y: source.y0 };
        //         // return diagonal({ source: o, target: o });
        //     });


        link.style("stroke-width", function (d) {
            return wscale(d.target.value)
        });

        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", function (d) {
                var o = { x: source.x, y: source.y };
                return diagonal({ source: o, target: o });
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    // Toggle children on click.
    function click(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        update(d);
    }

