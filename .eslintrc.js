module.exports = {
  settings:{
    'import/resolver':{
      'babel-module':{},
    },
  },
  env:{
    browser:true,
    node   :true,
  },
  parser :'@babel/eslint-parser',
  extends:['airbnb'],
  rules  :{
    semi:[
      2,
      'never',
    ],
    'key-spacing':[
      'error', {
        multiLine:{
          beforeColon:false,
          afterColon :false,
        },
        align:{
          beforeColon:false,
          afterColon :false,
          on         :'colon',
        },
      },
    ],
    'react/require-default-props':[
      0,
    ],
    'react/jsx-props-no-spreading':[
      0,
    ],
    'import/prefer-default-export':[
      0,
    ],
  },
}
