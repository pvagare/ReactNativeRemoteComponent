(function main(React,ReactNative,Footer,Header,responsiveHeight,responsiveFontSize, StyleSheet,CustomDivider,require) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = React;

var _react2 = _interopRequireDefault(_react);

var _reactNative = ReactNative;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewComponent = function (_React$Component) {
  _inherits(NewComponent, _React$Component);
  //console.log(_react2.default.Component)
  function NewComponent(props) {
    _classCallCheck(this, NewComponent);

    var _this = _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).call(this, props));

    _this.state = { existingUserId :"Spamlay" };
    return _this;
  }
	
   // onNewUserIdChange = (val) => {
        
   // }
  //  onconfirmUserIdChange = (val) => {
     //   this.setState( { confirmUserId : val })
   // }

	var styles = StyleSheet.create({
    bottomLayer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: responsiveHeight(2),
        marginRight: responsiveHeight(2),
    },
    container: {
        flex: 1,
    },
    padding: {
        padding: responsiveHeight(2),
    },
    scrollView: {
        flex: 1,
        backgroundColor: "white",
        padding: responsiveHeight(2)
    },
    headerContainter: {
        flexDirection: "row",
        paddingTop: responsiveHeight(2),
        paddingBottom: responsiveHeight(2),
        // alignContent:"center",
        backgroundColor: "blue",
        justifyContent: 'space-around',
        alignItems: "center"
    },
    accountSummaryContainer: {
        paddingBottom: responsiveHeight(2),
        paddingLeft: responsiveHeight(1.5)
    },
    accountSummaryText: {
        fontSize: responsiveFontSize(titleSize),
        textAlign: "justify"
    },
    customStyle: {
        backgroundColor: "green"
    },
    headerBorder: {
        alignItems: "center",
        flexDirection: "row",
        paddingTop: responsiveHeight(0.3)
    },
    mainContainer: {
        justifyContent: "flex-start", backgroundColor: "white", padding: responsiveHeight(1)
    },
    grayLine: {
        marginLeft: responsiveHeight(1), marginRight: responsiveHeight(1)
    }
});
	
  _createClass(NewComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.warn('New component mounted');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;
      return        let i = 1;
        let isAndroid = Platform.OS == "android" ? true : false
        return (

            _react2.default.createElement(_reactNative.View, {  style: styles.container},
                [
                    _react2.default.createElement(_reactNative.View,
                        {key:++i, style: isAndroid ? {} : { paddingTop: 10 }},
                        [
                            _react2.default.createElement(Header, { key : ++i})
                        ]),

                    _react2.default.createElement(_reactNative.View,{key:++i, style: styles.mainContainer },
                    [
                            _react2.default.createElement(_reactNative.View, { key:++i,style: styles.accountSummaryContainer },
                                [
                                    _react2.default.createElement(_reactNative.Text,{ key:++i,style: styles.accountSummary_reactNative.Text },["Change User ID"])
                                ]
                            ),
                            _react2.default.createElement(_reactNative.View, { key:++i,style: styles.grayLine }, [
                                _react2.default.createElement(CustomDivider,{key:++i})
                            ])
                    ]),
                    _react2.default.createElement(Scroll_reactNative.View, {key:++i, style: styles.scroll_reactNative.View },
                    [
                          // inside the Scroll_reactNative.View 
                          _react2.default.createElement(_reactNative.View,{key:++i,style : {height:500}},[



                            _react2.default.createElement(_reactNative.View,{ key:++i,style : {flex:1}},[
                                _react2.default.createElement(_reactNative.View,{key:++i},[
                                    _react2.default.createElement(_reactNative.Text,{key:++i},[
                                        "Your user Id must be between 8 and 26 characters in length and may be made up of both letters and numerals. Your user ID is not case sensitive."
                                    ])        
                                ]),

                                //
                                _react2.default.createElement(_reactNative.View,{key:++i},[
                                    _react2.default.createElement(_reactNative.View,{
                                        key:++i, style :{
                                        marginTop: responsiveHeight(2),
                                        backgroundColor: "#FAFAFA", borderRadius: 1, padding: responsiveHeight(2.2)
                                    }},
                                    [
                                     _react2.default.createElement(_reactNative.View,{key:++i, style:{  marginTop: responsiveHeight(1), marginBottom: 0 }},[
                                            // 
                                            _react2.default.createElement(_reactNative.View,{key:++i},[
                                                _react2.default.createElement(_reactNative.Text,{key:++i, style :{ color: "gray" }},[
                                                    "Existing User ID"
                                                ]) 
                                            ]) ,
                                            _react2.default.createElement(_reactNative.View,{key:++i},[
                                                //
                                                _react2.default.createElement(_reactNative.Text,{ key:++i},[
                                                    this.state.existingUserId
                                                ]) 
                                            ])
                                    ]),
                                    
                                    _react2.default.createElement(_reactNative.View,{key:++i, style:{marginTop: responsiveHeight(3)}},[
                                        // 
                                        _react2.default.createElement(_reactNative.View,{ key:++i},[
                                            _react2.default.createElement(_reactNative.Text,{ key:++i,style :{ color: "gray" }},[
                                                "New User ID"
                                            ]) 
                                        ]) ,
                                        _react2.default.createElement(_reactNative.View,{key:++i,style :{marginTop: responsiveHeight(1)}},[
                                            //
                                            _react2.default.createElement(_reactNative.TextInput,{key:++i, style : {borderWidth: 0.9, padding: 0, backgroundColor: "white", borderColor: "gray"} ,
                                            onChangeText : function(val) {  alert(val) _this.setState({ newUserId : val }) }},[
                                                this.state.newUserId
                                            ]) 
                                        ])
                                    ])
                                    ,
                                    _react2.default.createElement(_reactNative.View,{key:++i, style :{ marginTop: responsiveHeight(3)}},[
                                        // 
                                        _react2.default.createElement(_reactNative.View,{ key:++i},[
                                            _react2.default.createElement(_reactNative.Text,{ key:++i,style :{ color: "gray" }},[
                                                "Confirm  User ID"
                                            ]) 
                                        ]) ,
                                        _react2.default.createElement(_reactNative.View,{key:++i,style : {marginTop: responsiveHeight(1)}},[
                                            //
                                            _react2.default.createElement(_reactNative.TextInput,{ key:++i,style : {borderWidth: 0.9, padding: 0, backgroundColor: "white", borderColor: "gray"}
                                            ,onChange_reactNative.Text : function (val) {  _this.setState({ newUserId : val }) }},
                                            [
                                                this.state.confirmUserId
                                            ]) 
                                        ])
                                    ])
                                    
                                    ]),
                                    _react2.default.createElement(_reactNative.View,{key:++i, style : {marginTop: responsiveHeight(4)}},[
                                        
                                        _react2.default.createElement(_reactNative.View,{ key:++i,style:{ marginTop: responsiveHeight(2)}},[
                                            // 
                                            _react2.default.createElement(_reactNative.View,{ key:++i},[
                                                _react2.default.createElement(Button,{key:++i,style : {fontSize:responsiveFontSize(2),fontWeight :"normal",padding: responsiveHeight(0.5), color: "white", borderWidth: responsiveHeight(0.1), borderColor: "#015EBF", backgroundColor: "#0061b8" },
                                                onPress: function() { alert(_this.state.confirmUserId)}
                                                },[
                                                    "Save Changes",
                                                    
                                                ]) 
                                            ])
                                        ]),
                                        _react2.default.createElement(_reactNative.View,{key:++i, style:{ marginTop: responsiveHeight(1.9) }},[
                                            // 
                                            _react2.default.createElement(_reactNative.View,{ key:++i},[
                                                _react2.default.createElement(Button,{key:++i,style : {fontSize:responsiveFontSize(2),  fontWeight :"normal", padding: responsiveHeight(0.5), borderWidth: responsiveHeight(0.1), borderColor: "#0061b8", backgroundColor: "white" },
                                                onPress:function() {alert("Cancel")}
                                                },[
                                                    "Cancel"
                                                ]) 
                                            ])
                                        ])
                                    ]) 
                                ])
                            ])
                          ]),
                    ])
                    ,
                    _react2.default.createElement(Footer,{key:++i})
                ]
            )
        )
    }
  }]);

  return NewComponent;
}(_react2.default.Component);

  return NewComponent
})
