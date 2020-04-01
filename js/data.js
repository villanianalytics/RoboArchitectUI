var data = [{
    name: "Zip",
    id: "zip",
    description: "Archives file or directory and save it in a specified directory.",
    cmd: {
      linux: "RoboArchitect -zip /srcDir /destFile /log /loglevel",
      windows: "RoboArchitect.exe -zip /srcDir /destFile /log /loglevel",
      mac: "RoboArchitect -zip /srcDir /destFile /log /loglevel"
    },
    fields: [{
        label: "Source file or folder",
        id: "srcDir",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "srcDir",
          name: "srcDir",
          placeholder: "example.txt",
          class: "form-control",
          required: true,
        },
        helper: "Directory or file that will be archived to a .zip file.",
      },
      {
        label: "Destination zip",
        id: "destFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "destFile",
          name: "destFile",
          placeholder: "C:\\testFile.zip",
          class: "form-control",
          required: true,
          validate: ".*.zip$",
        },
        helper: ".zip file in which all selected files and directories will be placed. If the file exists, it will be overwritten.	",
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "customlogfile",
          name: "customlogfile",
          class: "form-control",
          required: true
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        helper: "It will allow you to setup a log file and log level.",
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "log",
          name: "log",
          placeholder: "logs.log",
          class: "form-control",
          required: false,
          validate: ".*.log$",
        },
        helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "loglevel",
          name: "loglevel",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "INFO"
            },
            text: "Info"
          },
          {
            attributes: {
              value: "DEBUG"
            },
            text: "Debug"
          },
          {
            attributes: {
              value: "TRACE"
            },
            text: "Trace"
          }
        ],
        helper: "Log level to be used during command. It will by default display Info level."
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "output",
          name: "output",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "windows"
            },
            text: "Windows"
          },
          {
            attributes: {
              value: "linux"
            },
            text: "Linux"
          },
          {
            attributes: {
              value: "mac"
            },
            text: "Mac"
          }
        ],
        helper: "Please setup the operating system where the command will run."
      }
    ]
  },
  {
    name: "UnZip",
    id: "unzip",
    description: "Unzip .zip file to a specified directory.",
    cmd: {
      linux: "RoboArchitect -unzip /srcFile /destDir /log /loglevel",
      windows: "RoboArchitect.exe -zip /srcFile /destDir /log /loglevel",
      mac: "RoboArchitect -zip /srcFile /destDir /log /loglevel"
    },
    fields: [{
        label: "Source file",
        id: "srcFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "srcFile",
          name: "srcFile",
          placeholder: "file.zip",
          class: "form-control",
          pattern: ".*.zip$",
          required: true,
        },
        helper: "A .zip file with files or directories."
      },
      {
        label: "Destination directory",
        id: "destDir",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "destDir",
          name: "destDir",
          placeholder: "../unzipped",
          class: "form-control",
          required: true,
        },
        helper: "The directory where the zip file will be unpacked. If the same files exist in this directory, they will be overwritten."
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "customlogfile",
          name: "customlogfile",
          class: "form-control",
          required: true
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        helper: "It will allow you to setup a log file and log level.",
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "log",
          name: "log",
          placeholder: "logs.log",
          class: "form-control",
          required: false,
          validate: ".*.log$",
        },
        helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "loglevel",
          name: "loglevel",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "INFO"
            },
            text: "Info"
          },
          {
            attributes: {
              value: "DEBUG"
            },
            text: "Debug"
          },
          {
            attributes: {
              value: "TRACE"
            },
            text: "Trace"
          }
        ],
        helper: "Log level to be used during command. It will by default display Info level."
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "output",
          name: "output",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "windows"
            },
            text: "Windows"
          },
          {
            attributes: {
              value: "linux"
            },
            text: "Linux"
          },
          {
            attributes: {
              value: "mac"
            },
            text: "Mac"
          }
        ],
        helper: "Please setup the operating system where the command will run."
      }
    ]
  },
  {
    name: "Convert",
    id: "convert",
    description: "Converts .csv file to .xlsx file.",
    cmd: {
      linux: "RoboArchitect -convert /srcFile /destFile /delim /sheetname /log",
      windows: "RoboArchitect.exe -convert /srcFile /destFile /delim /sheetname /log",
      mac: "RoboArchitect -convert /srcFile /destFile /delim /sheetname /log"
    },
    fields: [{
        label: "Source file",
        id: "srcFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "srcFile",
          name: "srcFile",
          placeholder: "file.csv",
          class: "form-control",
          pattern: ".*.csv$|.*.xlsx$|.*.txt$",
          required: true,
        },
        helper: "A .csv or .xlsx or .txt file to be converted to a .xlsx or .csv or .txt file, respectively."
      },
      {
        label: "Destination file",
        id: "destFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "destFile",
          name: "destFile",
          placeholder: "file.csv",
          class: "form-control",
          pattern: ".*.csv$|.*.xlsx$|.*.txt$",
          required: false,
        },
        helper: "File in which the source file would be formatted. If the file exists, it will be overwritten."
      },
      {
        label: "Delimiter",
        id: "delim",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "delim",
          name: "delim",
          placeholder: ", ; |",
          class: "form-control",
          maxlength: "1",
          required: false,
        },
        helper: 'Any single character file separator. Common delimiters are "," or "|" .'
      },
      {
        label: "Sheet name",
        id: "sheetname",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "sheetname",
          name: "sheetname",
          placeholder: "ABCD, SheetName1, Unnamed",
          class: "form-control",
          required: false,
        },
        helper: "The name of the .xlsx sheet needed to sign the .xlsx file or to convert the specified sheet to a .csv file."
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "customlogfile",
          name: "customlogfile",
          class: "form-control",
          required: true
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        helper: "It will allow you to setup a log file and log level.",
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "log",
          name: "log",
          placeholder: "logs.log",
          class: "form-control",
          required: false,
          validate: ".*.log$",
        },
        helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "loglevel",
          name: "loglevel",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "INFO"
            },
            text: "Info"
          },
          {
            attributes: {
              value: "DEBUG"
            },
            text: "Debug"
          },
          {
            attributes: {
              value: "TRACE"
            },
            text: "Trace"
          }
        ],
        helper: "Log level to be used during command. It will by default display Info level."
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "output",
          name: "output",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "windows"
            },
            text: "Windows"
          },
          {
            attributes: {
              value: "linux"
            },
            text: "Linux"
          },
          {
            attributes: {
              value: "mac"
            },
            text: "Mac"
          }
        ],
        helper: "Please setup the operating system where the command will run."
      }
    ]
  },
  {
    name: "Password",
    id: "password",
    description: "Encrypts user password.",
    cmd: {
      linux: "RoboArchitect -password /passwordFile /log",
      windows: "RoboArchitect.exe -password /passwordFile /log",
      mac: "RoboArchitect -password /passwordFile /log",
    },
    fields: [{
        label: "Password file",
        id: "passwordFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "passwordFile",
          name: "passwordFile",
          placeholder: "password.txt",
          class: "form-control",
          pattern: ".*.txt$",
          required: true,
        },
        helper: "File in which your encrypted password would be stored. If the file exists, it will be overwritten."
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "customlogfile",
          name: "customlogfile",
          class: "form-control",
          required: true
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        helper: "It will allow you to setup a log file and log level.",
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "log",
          name: "log",
          placeholder: "logs.log",
          class: "form-control",
          required: false,
          validate: ".*.log$",
        },
        helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "loglevel",
          name: "loglevel",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "INFO"
            },
            text: "Info"
          },
          {
            attributes: {
              value: "DEBUG"
            },
            text: "Debug"
          },
          {
            attributes: {
              value: "TRACE"
            },
            text: "Trace"
          }
        ],
        helper: "Log level to be used during command. It will by default display Info level."
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "output",
          name: "output",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "windows"
            },
            text: "Windows"
          },
          {
            attributes: {
              value: "linux"
            },
            text: "Linux"
          },
          {
            attributes: {
              value: "mac"
            },
            text: "Mac"
          }
        ],
        helper: "Please setup the operating system where the command will run."
      }
    ]
  },
  {
    name: "Connect",
    id: "connect",
    description: "Connect to specified url with required username and password, then get a response and save it to a file.",
    cmd: {
      linux: "RoboArchitect -connect /destFile /config /jsonPath /query /delimiter /passwordFile /reqType /srcFile /body /mediaType /log /loglevel",
      windows: "RoboArchitect.exe -connect /destFile /config /jsonPath /query /delimiter /passwordFile /reqType /srcFile /body /mediaType /log /loglevel",
      mac: "RoboArchitect -connect /destFile /config /jsonPath /query /delimiter /passwordFile /reqType /srcFile /body /mediaType /log /loglevel"
    },
    fields: [{
        label: "Configuration file ",
        id: "config",
        description: "Configuration file in which field such as url should be passed.",
        type: "modal",
        required: true,
        default: "",
        visible: true,
        subfields: [{
            label: "URL",
            id: "url",
            type: "text",
            visible: true,
            attributes: {
              type: "text",
              id: "url",
              name: "url",
              placeholder: "url",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "User",
            id: "user",
            type: "text",
            visible: true,
            attributes: {
              type: "text",
              id: "user",
              name: "user",
              placeholder: "username",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "Password",
            id: "password",
            type: "text",
            visible: true,
            attributes: {
              type: "text",
              id: "password",
              name: "password",
              placeholder: "password",
              class: "form-control",
              required: false,
            }
          }
        ]
      },
      {
        label: "Password file",
        id: "passwordFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "passwordFile",
          name: "passwordFile",
          placeholder: "password.txt",
          class: "form-control",
          pattern: ".*.txt$",
          required: false,
        },
        helper: "File in which your encrypted password is stored. If this parameter is not specified it would use a password from a config file."
      },
      {
        label: "Media Type",
        id: "mediaType",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "mediaType",
          name: "mediaType",
          placeholder: "application/json",
          class: "form-control",
          required: false,
        },
        helper: "Type of the files which would be sent to a web service."
      },
      {
        label: "Destination file",
        id: "destFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "destFile",
          name: "destFile",
          placeholder: "file.txt",
          class: "form-control",
          required: false,
        },
        helper: "File in which the response from the web service will be saved. If the file exists, it will be overwritten. If this parameter is not specified, the result will be displayed on the console."
      },
      {
        label: "Request type",
        id: "reqType",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "reqType",
          name: "reqType",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "GET"
            },
            text: "GET"
          },
          {
            attributes: {
              value: "HEAD"
            },
            text: "HEAD"
          },
          {
            attributes: {
              value: "POST"
            },
            text: "POST"
          },
          {
            attributes: {
              value: "PUT"
            },
            text: "PUT"
          },
          {
            attributes: {
              value: "PATCH"
            },
            text: "PATCH"
          },
          {
            attributes: {
              value: "DELETE"
            },
            text: "DELETE"
          }
        ],
        change: [{
          value: ["POST", "PUT"],
          showIds: ["srcFile", "body"],
          requiredIds: []
        }],
        helper: "Change the http method. If this parameter is not specified, then the GET method will be used by default."
      },
      {
        label: "Source file",
        id: "srcFile",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "srcFile",
          name: "srcFile",
          placeholder: "able.db",
          class: "form-control",
          required: false,
        },
        helper: "File which would be attached to your POST or PUT method."
      },
      {
        label: "Body",
        id: "body",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "body",
          name: "body",
          placeholder: "Any text with \\n new lines and \\t tabs",
          class: "form-control",
          required: false,
        },
        helper: "Text which would be send in the POST method."
      },
      {
        label: "Filtering type",
        id: "type",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "type",
          name: "type",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: ""
            },
            text: ""
          }, {
            attributes: {
              value: "jsonPath"
            },
            text: "JsonPath"
          },
          {
            attributes: {
              value: "sql"
            },
            text: "SQL"
          }
        ],
        change: [{
          value: ["jsonPath"],
          showIds: ["jsonPath"],
          requiredIds: ["jsonPath"]
        }, {
          value: ["sql"],
          showIds: ["query", "delimiter"],
          requiredIds: ["query"]
        }],
        helper: "Type of filtering"
      },
      {
        label: "Json path",
        id: "jsonPath",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "jsonPath",
          name: "jsonPath",
          placeholder: "$.id",
          class: "form-control",
          required: false,
        },
        helper: "Path to a specific part of the expected JSON response from the web server. If this parameter is not specified, the full response will be displayed."
      },
      {
        label: "Query",
        id: "query",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "query",
          name: "query",
          placeholder: "select * from table",
          class: "form-control",
          required: false,
        },
        helper: "Sql query."
      },
      {
        label: "Delimiter",
        id: "delimiter",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "delimiter",
          name: "delimiter",
          placeholder: "| , ; , #",
          maxlength: 1,
          class: "form-control",
          required: false,
        },
        helper: "Delimiter"
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "customlogfile",
          name: "customlogfile",
          class: "form-control",
          required: true
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        helper: "It will allow you to setup a log file and log level.",
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "log",
          name: "log",
          placeholder: "logs.log",
          class: "form-control",
          required: false,
          validate: ".*.log$",
        },
        helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "loglevel",
          name: "loglevel",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "INFO"
            },
            text: "Info"
          },
          {
            attributes: {
              value: "DEBUG"
            },
            text: "Debug"
          },
          {
            attributes: {
              value: "TRACE"
            },
            text: "Trace"
          }
        ],
        helper: "Log level to be used during command. It will by default display Info level."
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "output",
          name: "output",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "windows"
            },
            text: "Windows"
          },
          {
            attributes: {
              value: "linux"
            },
            text: "Linux"
          },
          {
            attributes: {
              value: "mac"
            },
            text: "Mac"
          }
        ],
        helper: "Please setup the operating system where the command will run."
      }
    ]
  },
  {
    name: "JsonPath",
    id: "jsonpath",
    description: "Json path is needed to filter a JSON file and take from there just a needed part. It takes the needful part of a JSON by a pattern",
    cmd: {
      linux: "RoboArchitect -jsonpath /srcFile /jsonPath /destFile /log",
      windows: "RoboArchitect.exe -jsonpath /srcFile /jsonPath /destFile /log",
      mac: "RoboArchitect -jsonpath /srcFile /jsonPath /destFile /log"
    },
    fields: [{
        label: "Source file",
        id: "srcFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "srcFile",
          name: "srcFile",
          placeholder: "file.json",
          class: "form-control",
          pattern: ".*.txt$|.*.json$",
          required: true,
        },
        helper: "File in which a JSON is located. It would be used to get a specific part of the JSON."
      },
      {
        label: "Json Path",
        id: "jsonPath",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "jsonPath",
          name: "jsonPath",
          placeholder: "$.id",
          class: "form-control",
          required: true,
        },
        helper: "Path to a specific part of the expected JSON taken from the source file."
      },
      {
        label: "Destination file",
        id: "destFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "destFile",
          name: "destFile",
          placeholder: "file.txt",
          class: "form-control",
          required: false,
        },
        helper: "File in which the filtered response will be saved. If the file exists, it will be overwritten. If this parameter is not specified, the result will be displayed on the console."
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "customlogfile",
          name: "customlogfile",
          class: "form-control",
          required: true
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        helper: "It will allow you to setup a log file and log level.",
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "log",
          name: "log",
          placeholder: "logs.log",
          class: "form-control",
          required: false,
          validate: ".*.log$",
        },
        helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "loglevel",
          name: "loglevel",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "INFO"
            },
            text: "Info"
          },
          {
            attributes: {
              value: "DEBUG"
            },
            text: "Debug"
          },
          {
            attributes: {
              value: "TRACE"
            },
            text: "Trace"
          }
        ],
        helper: "Log level to be used during command. It will by default display Info level."
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "output",
          name: "output",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "windows"
            },
            text: "Windows"
          },
          {
            attributes: {
              value: "linux"
            },
            text: "Linux"
          },
          {
            attributes: {
              value: "mac"
            },
            text: "Mac"
          }
        ],
        helper: "Please setup the operating system where the command will run."
      }
    ]
  },
  {
    name: "Email",
    id: "email",
    description: "You could send an email with or without an attached file to another person.",
    cmd: {
      linux: "RoboArchitect -email /subject /body /config /passwordFile /log",
      windows: "RoboArchitect.exe -email /subject /body /config /passwordFile /log",
      mac: "RoboArchitect -email /subject /body /config /passwordFile /log"
    },
    fields: [{
        label: "Subject",
        id: "subject",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "subject",
          name: "subject",
          placeholder: "Subject of a letter",
          class: "form-control",
          required: false,
        },
        helper: "Subject of an email."
      },
      {
        label: "Body",
        id: "body",
        type: "text",
        visible: true,
        attributes: {
          type: "textarea",
          id: "body",
          name: "body",
          placeholder: "Text of an email with new lines \\n and tabs \\t.",
          class: "form-control",
          rows: 4,
          required: false,
        },
        helper: "Body of an email. It could have new lines and tab characters. New line should be \\n and tab should be \\t."
      },
      {
        label: "Configuration file ",
        id: "config",
        type: "modal",
        required: true,
        default: "",
        visible: true,
        subfields: [{
            label: "From address",
            id: "fromaddress",
            type: "text",
            visible: true,
            attributes: {
              type: "email",
              id: "fromaddress",
              name: "fromaddress",
              placeholder: "email@gmail.com",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "Password",
            id: "password",
            type: "text",
            visible: true,
            attributes: {
              type: "password",
              id: "password",
              name: "password",
              placeholder: "password",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "To Address",
            id: "toaddress",
            type: "text",
            visible: true,
            attributes: {
              type: "email",
              id: "toaddress",
              name: "toaddress",
              placeholder: "emailTo@gmail.com",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "CC Address",
            id: "ccaddress",
            type: "text",
            visible: true,
            attributes: {
              type: "email",
              id: "ccaddress",
              name: "ccaddress",
              placeholder: "copyEmail@xrpmail.com",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "BCC Address",
            id: "bccaddress",
            type: "text",
            visible: true,
            attributes: {
              type: "email",
              id: "bccaddress",
              name: "bccaddress",
              placeholder: "sicretCopyEmail@enayu.com",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "Subject",
            id: "subject",
            type: "text",
            visible: true,
            attributes: {
              type: "text",
              id: "subject",
              name: "subject",
              placeholder: "Test subject",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "Body",
            id: "body",
            type: "text",
            visible: true,
            attributes: {
              type: "text",
              id: "body",
              name: "body",
              placeholder: "<h1>test</h1>",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "Attachment",
            id: "attachment",
            type: "text",
            visible: true,
            attributes: {
              type: "text",
              id: "attachment",
              name: "attachment",
              placeholder: "file.txt",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "CType",
            id: "ctype",
            type: "text",
            visible: true,
            attributes: {
              type: "text",
              id: "ctype",
              name: "ctype",
              placeholder: "TLS",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "SMTP server",
            id: "smtpserver",
            type: "text",
            visible: true,
            attributes: {
              type: "text",
              id: "smtpserver",
              name: "smtpserver",
              placeholder: "smtp.gmail.com",
              class: "form-control",
              required: false,
            }
          },
          {
            label: "Port",
            id: "port",
            type: "text",
            visible: true,
            attributes: {
              type: "text",
              id: "port",
              name: "port",
              placeholder: "587",
              class: "form-control",
              required: false,
            }
          }
        ],
        helper: "Configuration file with email details more detail."
      },
      {
        label: "Password file",
        id: "passwordFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "passwordFile",
          name: "passwordFile",
          placeholder: "password.txt",
          class: "form-control",
          pattern: ".*.txt$",
          required: false,
        },
        helper: "File in which your encrypted password is stored. If this parameter is not specified it would use a password from a config file."
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "customlogfile",
          name: "customlogfile",
          class: "form-control",
          required: true
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        helper: "It will allow you to setup a log file and log level.",
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "log",
          name: "log",
          placeholder: "logs.log",
          class: "form-control",
          required: false,
          validate: ".*.log$",
        },
        helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "loglevel",
          name: "loglevel",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "INFO"
            },
            text: "Info"
          },
          {
            attributes: {
              value: "DEBUG"
            },
            text: "Debug"
          },
          {
            attributes: {
              value: "TRACE"
            },
            text: "Trace"
          }
        ],
        helper: "Log level to be used during command. It will by default display Info level."
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "output",
          name: "output",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "windows"
            },
            text: "Windows"
          },
          {
            attributes: {
              value: "linux"
            },
            text: "Linux"
          },
          {
            attributes: {
              value: "mac"
            },
            text: "Mac"
          }
        ],
        helper: "Please setup the operating system where the command will run."
      }
    ]
  },
  {
    name: "Query file",
    id: "querydelim",
    description: "Allows a user to run SQL against a .csv/.txt file.",
    cmd: {
      linux: "RoboArchitect -querydelim /srcFile /query /delim /destFile /suppressHeaders /skipLines /skipDataLines	/log",
      windows: "RoboArchitect.exe -querydelim /srcFile /query /delim /destFile /suppressHeaders /skipLines /skipDataLines	/log",
      mac: "RoboArchitect -querydelim /srcFile /query /delim /destFile /suppressHeaders /skipLines /skipDataLines	/log"
    },
    fields: [{
        label: "Source file",
        id: "srcFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "srcFile",
          name: "srcFile",
          placeholder: "file.txt",
          class: "form-control",
          pattern: ".*.txt$|.*.csv$",
          required: true,
        },
        helper: "A .csv or .txt file which would be used as a database for SQL request. Name of the file is a table name, the first line is the table headers, everything else is the table data."
      },
      {
        label: "Query",
        id: "query",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "query",
          name: "query",
          placeholder: "SELECT * from table",
          class: "form-control",
          required: true,
        },
        helper: "SQL request which will be used for getting specific data from a source file."
      },
      {
        label: "Delimiter",
        id: "delim",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "delim",
          name: "delim",
          placeholder: ", ; |",
          class: "form-control",
          required: false,
        },
        helper: "Delimiter of the source file."
      },
      {
        label: "Destination file",
        id: "destFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "destFile",
          name: "destFile",
          placeholder: "text.txt",
          class: "form-control",
          required: false,
        },
        helper: "File in which the result of the SQL query will be written. If the file exists, it will be overwritten."
      },
      {
        label: "Suppress Headers",
        id: "suppressHeaders",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "suppressHeaders",
          name: "suppressHeaders",
          placeholder: "text.txt",
          class: "form-control",
          required: false,
        },
        options: [{
            attributes: {
              value: "false"
            },
            text: "No"
          },
          {
            attributes: {
              value: "true"
            },
            text: "Yes"
          }
        ],
        helper: "Indicates if the first line of the file starts with data instead of the column headers."
      },
      {
        label: "Skip lines",
        id: "skipLines",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "skipLines",
          name: "skipLines",
          placeholder: "0, 1, 2, 3, 4 and etc.",
          class: "form-control",
          required: false,
        },
        helper: "Number of lines in the file which would be ignored."
      },
      {
        label: "Skip Data Lines",
        id: "skipDataLines",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "skipDataLines",
          name: "skipDataLines",
          placeholder: "0, 1, 2, 3, 4 and etc.",
          class: "form-control",
          required: false,
        },
        helper: "Number of data lines which would be skipped after the column header."
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "customlogfile",
          name: "customlogfile",
          class: "form-control",
          required: true
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        helper: "It will allow you to setup a log file and log level.",
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "log",
          name: "log",
          placeholder: "logs.log",
          class: "form-control",
          required: false,
          validate: ".*.log$",
        },
        helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "loglevel",
          name: "loglevel",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "INFO"
            },
            text: "Info"
          },
          {
            attributes: {
              value: "DEBUG"
            },
            text: "Debug"
          },
          {
            attributes: {
              value: "TRACE"
            },
            text: "Trace"
          }
        ],
        helper: "Log level to be used during command. It will by default display Info level."
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "output",
          name: "output",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "windows"
            },
            text: "Windows"
          },
          {
            attributes: {
              value: "linux"
            },
            text: "Linux"
          },
          {
            attributes: {
              value: "mac"
            },
            text: "Mac"
          }
        ],
        helper: "Please setup the operating system where the command will run."
      }
    ]
  },
  {
    name: "Sql",
    id: "sql",
    description: "Allows a user to create SQLite database, create table or add data to it by using file with delimiter.",
    cmd: {
      linux: "RoboArchitect -sql /connection /op /db /srcFile /table /delim /mode /query /return /destFile /header	/log",
      windows: "RoboArchitect.exe -sql /connection /op /db /srcFile /table /delim /mode /query /return /destFile /header	/log",
      mac: "RoboArchitect -sql /connection /op /db /srcFile /table /delim /mode /query /return /destFile /header	/log"
    },
    fields: [{
        label: "Connection",
        id: "connection",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "connection",
          name: "connection",
          placeholder: "SQLITE",
          class: "form-control",
          required: false,
        },
        helper: "The JDBC connection string to use. For SQLite, enter SQLITE."
      },
      {
        label: "Query",
        id: "op",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "op",
          name: "op",
          class: "form-control",
          required: true,
        },
        options: [{
            attributes: {
              value: ""
            },
            text: ""
          }, {
            attributes: {
              value: "createDB"
            },
            text: "createDB"
          },
          {
            attributes: {
              value: "importTable"
            },
            text: "importTable"
          },
          {
            attributes: {
              value: "queryDB"
            },
            text: "queryDB"
          }
        ],
        change: [{
          value: ["importTable"],
          showIds: ["srcFile", "table", "delim", "mode"],
          requiredIds: ["srcFile", "table"]
        }, {
          value: ["queryDB"],
          showIds: ["query", "return", "destFile", "header"],
          requiredIds: ["query", "return", "destFile", "header"]
        }],
        helper: "The choice of what the program will do, namely create a database, add tables to it, run an SQL query."
      },
      {
        label: "Database name",
        id: "db",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "db",
          name: "db",
          placeholder: "shop.db",
          pattern: ".*.db$",
          class: "form-control",
          required: true,
        },
        helper: "The expected name and place where the SQL database will be created. The name should ends on .db."
      },
      {
        label: "Source file",
        id: "srcFile",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "srcFile",
          name: "srcFile",
          placeholder: "file.csv",
          pattern: ".*.csv$|.*.txt$",
          class: "form-control",
          required: false,
        },
        helper: "A delimited file is needed to create or add data from it to the SQLite database. Used in importTable option."
      },
      {
        label: "Table",
        id: "table",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "table",
          name: "table",
          placeholder: "tableName",
          class: "form-control",
          required: false,
        },
        helper: "The name of the table in the SQLite database. This name can be anything. Used in importTable option."
      },
      {
        label: "Delimiter",
        id: "delim",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "delim",
          name: "delim",
          placeholder: "0, ; |",
          class: "form-control",
          maxlength: "1",
          required: false,
        },
        helper: "Delimiter of the source file. Used in importTable and queryDB option."
      },
      {
        label: "Mode",
        id: "mode",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "mode",
          name: "mode",
          class: "form-control",
          required: false,
        },
        options: [{
            attributes: {
              value: "APPEND"
            },
            text: "APPEND"
          },
          {
            attributes: {
              value: "OVERWRITE"
            },
            text: "OVERWRITE"
          }
        ],
        helper: "The way to work with the table. You can either overwrite or create a table or add data to the end of the table. Used in importTable option."
      },
      {
        label: "Query",
        id: "query",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "query",
          name: "query",
          placeholder: "query.txt, SELECT * from table",
          class: "form-control",
          maxlength: "1",
          required: true,
        },
        helper: "SQL request which will be used for getting specific data from a SQLite database. Used in queryDB option."
      },
      {
        label: "Return",
        id: "return",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "return",
          name: "return",
          class: "form-control",
          required: false,
        },
        options: [{
            attributes: {
              value: "yes"
            },
            text: "Yes"
          },
          {
            attributes: {
              value: "no"
            },
            text: "No"
          }
        ],
        helper: "Shows whether or not the program displays the result. Used in queryDB option."
      },
      {
        label: "Destination File",
        id: "destFile",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "destFile",
          name: "destFile",
          placeholder: "file.txt",
          pattern: ".*.txt$",
          class: "form-control",
          required: false,
        },
        helper: "File in which the result of the SQL query will be written. If the file exists, it will be overwritten. Used in queryDB option."
      },
      {
        label: "Header",
        id: "header",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "header",
          name: "header",
          class: "form-control",
          required: false,
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        helper: "Shows whether or not the program displays the table header. Used in queryDB option."
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "customlogfile",
          name: "customlogfile",
          class: "form-control",
          required: true
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        helper: "It will allow you to setup a log file and log level.",
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "log",
          name: "log",
          placeholder: "logs.log",
          class: "form-control",
          required: false,
          validate: ".*.log$",
        },
        helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "loglevel",
          name: "loglevel",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "INFO"
            },
            text: "Info"
          },
          {
            attributes: {
              value: "DEBUG"
            },
            text: "Debug"
          },
          {
            attributes: {
              value: "TRACE"
            },
            text: "Trace"
          }
        ],
        helper: "Log level to be used during command. It will by default display Info level."
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "output",
          name: "output",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "windows"
            },
            text: "Windows"
          },
          {
            attributes: {
              value: "linux"
            },
            text: "Linux"
          },
          {
            attributes: {
              value: "mac"
            },
            text: "Mac"
          }
        ],
        helper: "Please setup the operating system where the command will run."
      }
    ]
  },
  {
    name: "UnSql",
    id: "unsql",
    description: "Allows a user to run select queries in xml and json files",
    cmd: {
      linux: "RoboArchitect -unsql /srcFile /destFile /query /delimiter /headers /log /loglevel",
      windows: "RoboArchitect.exe -unsql /srcFile /destFile /query /delimiter /headers /log /loglevel",
      mac: "RoboArchitect -unsql /srcFile /destFile /query /delimiter /headers /log /loglevel"
    },
    fields: [{
        label: "Source file",
        id: "srcFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "srcFile",
          name: "srcFile",
          placeholder: "test.json",
          pattern: ".*.json$|.*.xml$",
          class: "form-control",
          required: true,
        },
        helper: "A .json or .xml to be used as a source for the sql query."
      },
      {
        label: "Destination file",
        id: "destFile",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "destFile",
          name: "destFile",
          placeholder: "test.txt",
          pattern: ".*.txt$|.*.json$|.*.xml$",
          class: "form-control",
          required: true,
        },
        helper: "A .json or .xml or .txt file to used as a destination."
      },
      {
        label: "SQL Query",
        id: "query",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "query",
          name: "query",
          placeholder: "select * from test",
          pattern: "select.*",
          class: "form-control",
          required: true,
        },
        helper: "A select query to be performed against the source file."
      },
      {
        label: "Delimiter",
        id: "delimiter",
        type: "text",
        visible: true,
        attributes: {
          type: "text",
          id: "delimiter",
          name: "delimiter",
          placeholder: "|",
          maxlength: "1",
          class: "form-control",
          required: false,
        },
        helper: "This parameter will be used to delimiter results in a txt file."
      },
      {
        label: "Headers",
        id: "headers",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "headers",
          name: "headers",
          class: "form-control",
          required: false
        },
        options: [{
          attributes: {
            value: ""
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        helper: "This parameter will be used to include the headers results in a txt file."
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "customlogfile",
          name: "customlogfile",
          class: "form-control",
          required: true
        },
        options: [{
          attributes: {
            value: "no"
          },
          text: "No"
        }, {
          attributes: {
            value: "yes"
          },
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        helper: "It will allow you to setup a log file and log level.",
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        visible: false,
        attributes: {
          type: "text",
          id: "log",
          name: "log",
          placeholder: "logs.log",
          class: "form-control",
          required: false,
          validate: ".*.log$",
        },
        helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        visible: false,
        attributes: {
          type: "select",
          id: "loglevel",
          name: "loglevel",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "INFO"
            },
            text: "Info"
          },
          {
            attributes: {
              value: "DEBUG"
            },
            text: "Debug"
          },
          {
            attributes: {
              value: "TRACE"
            },
            text: "Trace"
          }
        ],
        helper: "Log level to be used during command. It will by default display Info level."
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        visible: true,
        attributes: {
          type: "select",
          id: "output",
          name: "output",
          class: "form-control",
          required: true
        },
        options: [{
            attributes: {
              value: "windows"
            },
            text: "Windows"
          },
          {
            attributes: {
              value: "linux"
            },
            text: "Linux"
          },
          {
            attributes: {
              value: "mac"
            },
            text: "Mac"
          }
        ],
        helper: "Please setup the operating system where the command will run."
      }
    ]
  }
];