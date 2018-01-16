//危险分层
var riskLevel = {
	"Small" : "低危",
	"Middle" : "中危",
	"Height" : "高危"
}
// 健康标准
var healthstandard = {
	//糖尿病
	"diabetes":{
		"factors" : {
			//空腹血糖
			"fastingBloodGlucose":{[
				//正常值,(<=6.0)
				{
					"range" : "(N-,6.1)",
					"index" : "normal"
				},
				//空腹血糖受损(6.1~6.9)
				{
					"range" : "[6.1,7.0)",
					"index" : "firstClass"
				},
				//糖耐量受损(<7.0)
				 {
					"range" : "(N-,7.0)",
					"index" : "SecondClass"
				},
				//糖尿病(>=7.0)
				{
					"range" : "[7.0,N+)",
					"index" : "thirdClass"
				}
			]},

			//糖负荷后两小时血糖
			"TwohourBloodGlucose":{[
				//正常值,(<7.8)
				{
					"range" : "(N-,7.8)",
					"index" : "normal"
				},
				//空腹血糖受损(<7.8)
				{
					"range" : "(N-,7.8)",
					"index" : "firstClass"
				},
				//糖耐量受损(7.8~11)
				{
					"range" : "[7.8,11.1)",
					"index" : "SecondClass"
				},
				//糖尿病(>=11.1)
				{
					"range" : "[11.1,N+)",
					"index" : "thirdClass"
				}
			]}
		}
	},

	//高血压
	"hypertension":{
		"factors" : {
			// 舒张压
			"diastolicPressure":{[
				//正常值,(<80)
				{
					"range" : "(N-,80)",
					"index" : "normal"
				},
				//正常高值(80~89)
				{
					"range" : "[80,90)",
					"index" : "heightNormal"
				},
				//1级高血压(90~99)
				{
					"range" : "[90,100)",
					"index" : "firstClass"
				},
				//2级高血压(100~109)
				{
					"range" : "[100,110)",
					"index" : "SecondClass"
				},

				//3级高血压(>=110)
				{
					"range" : "[110,N+)",
					"index" : "thirdClass"
				},
				//单纯收缩期高血压(<90)
				{
					"range" : "(N-,90)",
					"index" : "SystolicHypertension"
				}
			]},
			// 收缩压
			"systolicPressure":{[
			//正常值,(<120)
			{
				"range" : "(N-,120)",
				"index" : "normal"
			},
			//正常高值(120~139)
			{
				"range" : "[120,140)",
				"index" : "heightNormal"
			},
			//1级高血压(140~159)
			{
				"range" : "[140,160)",
				"index" : "firstClass"
			},
			//2级高血压(160~179)
			{
				"range" : "[160,180)",
				"index" : "SecondClass"
			},
			//3级高血压(>=180)
			{
				"range" : "[180,N+)",
				"index" : "thirdClass"
			},
			//单纯收缩期高血压(<140)
			{
				"range" : "(N-,140)",
				"index" : "SystolicHypertension"
			}
		]}
		}
	},

	//血脂
	"dyslipidemia":{
		//血脂异常的检出
		"factors" :{
			//TC
			"TC" : {[
				//正常值,(<5.18)
				{
					"range" : "(N-,5.18)",
					"index" : "normal"
				},
				//边缘升高(5.18~6.19)
				{
					"range" : "[5.18,6.22)",
					"index" : "littleHeight"
				},
				//升高(>=6.22)
				{
					"range" : "[6.22,N+)",
					"index" : "height"
				}
			]},
			//LDL-C
			"LDL-C":{[
				//正常值,(<3.37)
				{
					"range" : "(N-,3.37)",
					"index" : "normal"
				},
				//边缘升高(3.37~4.12)
				{
					"range" : "[3.37,4.14)",
					"index" : "littleHeight"
				},
				//升高(>=4.14)
				{
					"range" : "[4.14,N+)",
					"index" : "height"
				}
			]},
			//HDL-C
			"HDL-C":{[
				//正常值,(<1.04)
				{
					"range" : "[1.04,N+)",
					"index" : "normal"
				},
				//升高(>=1.55)
				{
					"range" : "[1.55,N+)",
					"index" : "height"
				},
				//降低(<1.04)
				{
					"range" : "(N-,1.04)",
					"index" : "low"
				}
			]},
			//TG
			"TG":{[
				//正常值,(<1.70)
				{
					"range" : "(N-,1.70)",
					"index" : "normal"
				},
				//边缘升高(1.70~2.25)
				{
					"range" : "[1.70,2.26)",
					"index" : "littleHeight"
				},
				//升高(>=2.26)
				{
					"range" : "[2.26,N+)",
					"index" : "height"
				}
			]}
		}
	},

	//冠心病
	"coronaryDisease" : {
		//相关影响因素
		"factors" : {
			"man" : {
				//年龄
				"age" : {[
					//得分为0,下限和上限(35~39)
					{
						"range" : "[35,40)",
						"index" : "zero"
					},
					//得分为1(40~44)
					{
						"range" : "[40,45)",
						"index" : "one"
					},
					//得分为2(45~49)
					{
						"range" : "[45,50)",
						"index" : "two"
					},
					//得分为3(50~54)
					{
						"range" : "[50,55)",
						"index" : "three"
					},
					//得分为4(55~59)
					{
						"range" : "[55,60)",
						"index" : "four"
					},
					//每增加五岁加一分(>=60)
					{
						"range" : "[60,N+)",
						"index" : "max"
					}
				]},
				// 收缩压
				"systolicPressure" : {[
					//得分为-2,下限和上限(<120)
					{
						"range" : "(N-,120)",
						"index" : "minusTwo"
					},
					//得分为0,(120~129)
					{
						"range" : "[120,130)",
						"index" : "zero"
					},
					//得分为1(130~139)
					{
						"range" : "[130,140)",
						"index" : "one"
					},
					//得分为2(140~159)
					{
						"range" : "[140,160)",
						"index" : "two"
					},
					//得分为5(160~179)
					{
						"range" : "[160,180)",
						"index" : "five"
					},
					//得分为8(>=180)
					{
						"range" : "[180,N+)",
						"index" : "eight"
					}
				]},
				// BMI
				"systolicPressure" : {[
					//得分为0,(<24)
					{
						"range" : "(N-,24)",
						"index" : "zero"
					},
					//得分为1(24~27.9)
					{
						"range" : "[24,28)",
						"index" : "one"
					},
					//得分为2(>=28)
					{
						"range" : "[28,N+)",
						"index" : "two"
					}
				]},
				// TC
				"systolicPressure" : {[
					//得分为0,(<5.20)
					{
						"range" : "(N-,5.20)",
						"index" : "zero"
					},
					//得分为1(>=5.20)
					{
						"range" : "[5.20,N+)",
						"index" : "one"
					}
				]},
				// 吸烟
				"smoke" : {
					//得分为0,(否)
					"zero" : "no",
					//得分为1(是)
					"one" : "yes"
				},
				// DM
				"DM" : {
					//得分为0,(否)
					"zero" : "no",
					//得分为1(是)
					"one" : "yes"
				}
			},
			"woman" : {
				//年龄
				"age" : {[
					//得分为0,下限和上限(35~39)
					{
						"range" : "[35,40)",
						"index" : "zero"
					},
					//得分为1(40~44)
					{
						"range" : "[40,45)",
						"index" : "one"
					},
					//得分为2(45~49)
					{
						"range" : "[45,50)",
						"index" : "two"
					},
					//得分为3(50~54)
					{
						"range" : "[50,55)",
						"index" : "three"
					},
					//得分为4(55~59)
					{
						"range" : "[55,60)",
						"index" : "four"
					},
					//每增加五岁加一分(>=60)
					{
						"range" : "[60,N+)",
						"index" : "max"
					}
				]},
				// 收缩压
				"systolicPressure" : {[
					//得分为-2,(<120)
					{
						"range" : "(N-,120)",
						"index" : "minusTwo"
					},
					//得分为0,(120~129)
					{
						"range" : "[120,130)",
						"index" : "zero"
					},
					//得分为1(130~139)
					{
						"range" : "[130,140)",
						"index" : "one"
					},
					//得分为2(140~159)
					{
						"range" : "[140,160)",
						"index" : "two"
					},
					//得分为5(160~179)
					{
						"range" : "[160,180)",
						"index" : "three"
					},
					//得分为8(>=180)
					{
						"range" : "[180,N+)",
						"index" : "four"
					}
				]},
				// BMI
				"systolicPressure" : {[
					//得分为0,(<24)
					{
						"range" : "(N-,24)",
						"index" : "zero"
					},
					//得分为1(24~27.9)
					{
						"range" : "[24,28)",
						"index" : "one"
					},
					//得分为2(>=28)
					{
						"range" : "[28,N+)",
						"index" : "two"
					}
				]},
				// TC
				"systolicPressure" : {[
					//得分为0,(<5.20)
					{
						"range" : "(N-,5.20)",
						"index" : "zero"
					},
					//得分为1(>=5.20)
					{
						"range" : "[5.20,N+)",
						"index" : "one"
					}
				]},
				// 吸烟
				"smoke" : {
					//得分为0,(否)
					"zero" : "no",
					//得分为1(是)
					"one" : "yes"
				},
				// DM
				"DM" : {
					//得分为0,(否)
					"zero" : "no",
					//得分为1(是)
					"one" : "yes"
				}
			}
		},

		//对应得分
		"score":{
			"minusTwo":"-2",
			"zero":"0",
			"one":"1",
			"two":"2",
			"three":"3",
			"four":"4",
			"five":"5",
			"eight":"8"
		},

		//对应危险度
		"grade":{
			"man" : {
				"NO1" : "0.3",
				"NO2" : "0.5",
				"NO3" : "0.6",
				"NO4" : "0.8",
				"NO5" : "1.1",
				"NO6" : "1.5",
				"NO7" : "2.1",
				"NO8" : "2.9",
				"NO9" : "3.9",
				"NO10" : "5.4",
				"NO11" : "7.3",
				"NO12" : "9.7",
				"NO13" : "12.8",
				"NO14" : "16.8",
				"NO15" : "21.7",
				"NO16" : "27.7",
				"NO17" : "35.3",
				"NO18" : "44.3",
				"NOmax" : "52.6",
			},
			"woman" : {
				"NO1" : "0.1",
				"NO2" : "0.2",
				"NO3" : "0.3",
				"NO4" : "0.5",
				"NO5" : "0.8",
				"NO6" : "1.2",
				"NO7" : "1.8",
				"NO8" : "2.8",
				"NO9" : "4.4",
				"NO10" : "6.8",
				"NO11" : "10.3",
				"NO12" : "15.6",
				"NO13" : "23.0",
				"NO14" : "32.7",
				"NOmax" : "43.1"
			}
		},

		//得分对应危险度
		"score":{
			//(<=-1,>=17)
			"man" : {
				"class-1" : "-1",
				"class0" : "0",
				"class1" : "1",
				"class2" : "2",
				"class3" : "3",
				"class4" : "4",
				"class5" : "5",
				"class6" : "6",
				"class7" : "7",
				"class8" : "8",
				"class9" : "9",
				"class10" : "10",
				"class11" : "11",
				"class12" : "12",
				"class13" : "13",
				"class14" : "14",
				"class15" : "15",
				"class16" : "16",
				"classMax" : "17"
			},
			//(<=-2,>=13)
			"woman" : {
				"class-2" : "-2",
				"class-1" : "-1",
				"class0" : "0",
				"class1" : "1",
				"class2" : "2",
				"class3" : "3",
				"class4" : "4",
				"class5" : "5",
				"class6" : "6",
				"class7" : "7",
				"class8" : "8",
				"class9" : "9",
				"class10" : "10",
				"class11" : "11",
				"class12" : "12",
				"classmax" : "13"
			}
		}
	},

	//肥胖
	"obesity" : {},

	//高尿酸血症
	"hyperuricemia" : {},

	//痛风
	"gout" : {},

	//脂肪肝
	"hepaticAdiposeInfiltration" : {},
}
