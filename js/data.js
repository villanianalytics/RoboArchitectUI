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
        description: "Directory or file that will be archived to a .zip file.",
        type: "text",
        required: true,
        command: "/srcDir",
        default: "",
        placeholder: "C:\Program Files, example.txt",
        visible: true
      },
      {
        label: "Destination zip",
        id: "destFile",
        description: ".zip file in which all selected files and directories will be placed. If the file exists, it will be overwritten.	",
        validate: ".*.zip$",
        type: "text",
        required: true,
        command: "/destFile",
        default: "",
        placeholder: "C:\\testFile.zip",
        visible: true

      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        visible: true
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log",
        visible: false
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        required: "true",
        options: [{
            value: "INFO",
            text: "Info"
          },
          {
            value: "DEBUG",
            text: "Debug"
          },
          {
            value: "TRACE",
            text: "Trace"
          }
        ],
        visible: false,
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        required: true,
        options: [{
            value: "windows",
            text: "Windows"
          },
          {
            value: "linux",
            text: "Linux"
          },
          {
            value: "mac",
            text: "Mac"
          }
        ],
        visible: true
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
        description: ".zip file with files or directories.",
        validate: ".*.zip$",
        type: "text",
        required: true,
        default: "",
        placeholder: "file.zip, zip/example.zip",
        visible: true
      },
      {
        label: "Destination directory",
        id: "destDir",
        type: "text",
        description: "The directory where the zip file will be unpacked. If the same files exist in this directory, they will be overwritten.",
        required: true,
        default: "",
        placeholder: "unzipped, example/directory",
        visible: true
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        visible: true
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log",
        visible: false
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        required: "true",
        options: [{
            value: "INFO",
            text: "Info"
          },
          {
            value: "DEBUG",
            text: "Debug"
          },
          {
            value: "TRACE",
            text: "Trace"
          }
        ],
        visible: false,
      },
      {
        label: "Output",
        id: "output",
        type: "select",
        required: "true",
        options: [{
            value: "windows",
            text: "Windows"
          },
          {
            value: "linux",
            text: "Linux"
          },
          {
            value: "mac",
            text: "Mac"
          }
        ],
        visible: true
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
        label: "Source file ",
        id: "srcFile",
        description: "A .csv or .xlsx or .txt file to be converted to a .xlsx or .csv or .txt file, respectively.",
        validate: ".*.csv$|.*.xlsx$|.*.txt$",
        default: "",
        type: "text",
        required: true,
        placeholder: "file.csv, file.txt, file.xlsx, dir/example.txt",
        visible: true
      },
      {
        label: "Destination file",
        id: "destFile",
        type: "text",
        description: "File in which the source file would be formatted. If the file exists, it will be overwritten.	",
        required: false,
        default: "File.xlsx Or File.csv depending on /srcFile",
        placeholder: "file.xlsx, file.csv, file.txt, converted/file.csv",
        visible: true
      },
      {
        label: "Delimiter",
        id: "delim",
        type: "text",
        description: 'Any single character file separator. Common delimiters are "," or "|" .	',
        maxlength: "1",
        required: false,
        default: "",
        placeholder: ", ; |",
        visible: true
      },
      {
        label: "Sheet name",
        id: "sheetname",
        type: "text",
        description: "The name of the .xlsx sheet needed to sign the .xlsx file or to convert the specified sheet to a .csv file.	",
        required: false,
        default: "Sheet1",
        placeholder: "ABCD, SheetName1, Unnamed",
        visible: true
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        visible: true
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log",
        visible: false
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        required: "true",
        options: [{
            value: "INFO",
            text: "Info"
          },
          {
            value: "DEBUG",
            text: "Debug"
          },
          {
            value: "TRACE",
            text: "Trace"
          }
        ],
        visible: false,
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        required: "true",
        options: [{
            value: "windows",
            text: "Windows"
          },
          {
            value: "linux",
            text: "Linux"
          },
          {
            value: "mac",
            text: "Mac"
          }
        ],
        visible: true
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
        label: "Password file ",
        id: "passwordFile",
        type: "text",
        description: "File in which your encrypted password would be stored. If the file exists, it will be overwritten.",
        default: "",
        required: true,
        placeholder: "password.txt, encrypted/file.txt",
        validate: ".*.txt$",
        visible: true
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        visible: true
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log",
        visible: false
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        required: "true",
        options: [{
            value: "INFO",
            text: "Info"
          },
          {
            value: "DEBUG",
            text: "Debug"
          },
          {
            value: "TRACE",
            text: "Trace"
          }
        ],
        visible: false,
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        required: "true",
        options: [{
            value: "windows",
            text: "Windows"
          },
          {
            value: "linux",
            text: "Linux"
          },
          {
            value: "mac",
            text: "Mac"
          }
        ],
        visible: true
      }
    ]
  },
  {
    name: "Connect",
    id: "connect",
    description: "Connect to specified url with required username and password, then get a response and save it to a file.",
    cmd: {
      linux: "RoboArchitect -connect /destFile /config /jsonPath /query /delimiter /passwordFile /reqType	/srcFile /body /mediaType /log /loglevel",
      windows: "RoboArchitect.exe -connect /destFile /config /jsonPath /query /delimiter /passwordFile /reqType	/srcFile /body /mediaType /log /loglevel",
      mac: "RoboArchitect -connect /destFile /config /jsonPath /query /delimiter /passwordFile /reqType	/srcFile /body /mediaType /log /loglevel"
    },
    fields: [{
        label: "Configuration file ",
        id: "config",
        description: "Configuration file in which field such as url should be passed.",
        type: "text",
        required: true,
        default: "",
        validate: ".*.properties$|.*.txt$",
        placeholder: "config.properties, config.txt",
        visible: true
      },
      {
        label: "Password file",
        id: "passwordFile",
        description: "File in which your encrypted password is stored. If this parameter is not specified it would use a password from a config file.",
        type: "text",
        required: false,
        default: "password in a config file.",
        placeholder: "password.txt, directory/file.txt",
        visible: true
      },
      {
        label: "Media Type",
        id: "mediaType",
        description: "Type of the files which would be sent to a web service.",
        type: "text",
        required: false,
        default: "application/json",
        placeholder: "application/json, text/html, multipart/form-data and etc",
        visible: true
      },
      {
        label: "Destination file ",
        id: "destFile",
        description: "File in which the response from the web service will be saved. If the file exists, it will be overwritten. If this parameter is not specified, the result will be displayed on the console.",
        type: "text",
        required: false,
        default: "Console output",
        placeholder: "file.txt, response.json",
        visible: true
      },
      {
        label: "Request type",
        id: "reqType",
        description: "Change the http method. If this parameter is not specified, then the GET method will be used by default.	",
        type: "select",
        options: [{
            value: "GET",
            text: "GET"
          },
          {
            value: "HEAD",
            text: "HEAD"
          },
          {
            value: "POST",
            text: "POST"
          },
          {
            value: "PUT",
            text: "PUT"
          },
          {
            value: "PATCH",
            text: "PATCH"
          },
          {
            value: "DELETE",
            text: "DELETE"
          }
        ],
        required: false,
        default: "GET",
        change: [{
          value: ["POST", "PUT"],
          showIds: ["srcFile", "body"],
          requiredIds: []
        }],
        visible: true
      },
      {
        label: "Source file",
        id: "srcFile",
        description: "File which would be attached to your POST or PUT method.	",
        type: "text",
        required: false,
        default: "",
        placeholder: "table.db, text.txt, image.png",
        visible: false
      },
      {
        label: "Body",
        id: "body",
        description: "Text which would be send in the POST method.",
        type: "text",
        required: false,
        default: "",
        placeholder: "Any text with \\n new lines and \\t tabs",
        visible: false
      },
      {
        label: "Filtering type",
        id: "type",
        description: "Type of filtering",
        type: "select",
        options: [{
            value: "",
            text: ""
          }, {
            value: "jsonPath",
            text: "JsonPath"
          },
          {
            value: "sql",
            text: "SQL"
          }
        ],
        required: true,
        default: "GET",
        change: [{
          value: ["jsonPath"],
          showIds: ["jsonPath"],
          requiredIds: ["jsonPath"]
        }, {
          value: ["sql"],
          showIds: ["query", "delimiter"],
          requiredIds: ["query"]
        }],
        visible: true
      },
      {
        label: "Json path",
        id: "jsonPath",
        description: "Path to a specific part of the expected JSON response from the web server. If this parameter is not specified, the full response will be displayed.",
        type: "text",
        required: false,
        default: "",
        placeholder: "$.id",
        visible: false
      },
      {
        label: "Query",
        id: "query",
        description: "Sql query",
        type: "text",
        required: false,
        default: "",
        placeholder: "select * from table",
        visible: false
      },
      {
        label: "Delimiter",
        id: "query",
        description: "Delimiter",
        type: "text",
        required: false,
        default: "",
        placeholder: "| , ; , #",
        maxlength: 1,
        visible: false
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        visible: true
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log",
        visible: false
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        required: "true",
        options: [{
            value: "INFO",
            text: "Info"
          },
          {
            value: "DEBUG",
            text: "Debug"
          },
          {
            value: "TRACE",
            text: "Trace"
          }
        ],
        visible: false,
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        required: true,
        options: [{
            value: "windows",
            text: "Windows"
          },
          {
            value: "linux",
            text: "Linux"
          }
        ],
        visible: true
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
        description: "File in which a JSON is located. It would be used to get a specific part of the JSON.",
        default: "",
        type: "text",
        required: true,
        placeholder: "file.json, file.txt",
        visible: true
      },
      {
        label: "Json Path",
        id: "jsonPath",
        description: "Path to a specific part of the expected JSON taken from the source file.",
        type: "text",
        required: true,
        default: "",
        placeholder: "$.id",
        visible: true
      },
      {
        label: "Destination file",
        id: "destFile",
        description: "File in which the filtered response will be saved. If the file exists, it will be overwritten. If this parameter is not specified, the result will be displayed on the console.",
        type: "text",
        required: false,
        default: "Console output",
        placeholder: "file.txt, response.json",
        visible: true
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        visible: true
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log",
        visible: false
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        required: "true",
        options: [{
            value: "INFO",
            text: "Info"
          },
          {
            value: "DEBUG",
            text: "Debug"
          },
          {
            value: "TRACE",
            text: "Trace"
          }
        ],
        visible: false,
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        required: true,
        options: [{
            value: "windows",
            text: "Windows"
          },
          {
            value: "linux",
            text: "Linux"
          },
          {
            value: "mac",
            text: "Mac"
          }
        ],
        visible: true
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
        description: "Subject of an email.",
        default: "",
        type: "text",
        required: false,
        placeholder: "Subject of a letter",
        visible: true
      },
      {
        label: "Body",
        id: "body",
        description: "Body of an email. It could have new lines and tab characters. New line should be \\n and tab should be \\t.",
        type: "text",
        required: false,
        default: "",
        placeholder: "Text of an email with new lines \\n and tabs \\t.",
        visible: true
      },
      {
        label: "Configuration file",
        id: "config",
        description: "Config file with email details more detail.	",
        type: "text",
        required: true,
        default: "",
        placeholder: "config.properties, config.txt",
        visible: true
      },
      {
        label: "Password file",
        id: "passwordFile",
        description: "File in which your encrypted password is stored. If this parameter is not specified it would use a password from a config file.",
        type: "text",
        required: false,
        default: "password in a config file.",
        placeholder: "password.txt, directory/file.txt",
        visible: true
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        visible: true
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log",
        visible: false
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        required: "true",
        options: [{
            value: "INFO",
            text: "Info"
          },
          {
            value: "DEBUG",
            text: "Debug"
          },
          {
            value: "TRACE",
            text: "Trace"
          }
        ],
        visible: false,
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        required: true,
        options: [{
            value: "windows",
            text: "Windows"
          },
          {
            value: "linux",
            text: "Linux"
          },
          {
            value: "mac",
            text: "Mac"
          }
        ],
        visible: true
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
        description: "A .csv or .txt file which would be used as a database for SQL request. Name of the file is a table name, the first line is the table headers, everything else is the table data.	",
        default: "",
        type: "text",
        required: true,
        placeholder: "file.txt, file.csv",
        visible: true
      },
      {
        label: "Query",
        id: "query",
        description: "SQL request which will be used for getting specific data from a source file.",
        type: "text",
        required: true,
        default: "",
        placeholder: "SELECT * from table",
        visible: true
      },
      {
        label: "Delimiter",
        id: "delim",
        description: "Delimiter of the source file.",
        type: "text",
        required: false,
        default: ",",
        maxlength: "1",
        placeholder: ", ; |",
        visible: true
      },
      {
        label: "Destination file",
        id: "destFile",
        description: "File in which the result of the SQL query will be written. If the file exists, it will be overwritten.",
        type: "text",
        required: false,
        default: "Console output",
        placeholder: "text.txt"
      },
      {
        label: "Suppress Headers",
        id: "suppressHeaders",
        description: "Indicates if the first line of the file starts with data instead of the column headers.	",
        type: "select",
        required: false,
        options: [{
            value: "false",
            text: "No"
          },
          {
            value: "true",
            text: "Yes"
          }
        ],
        default: "false",
        visible: true
      },
      {
        label: "Skip lines",
        id: "skipLines",
        description: "Number of lines in the file which would be ignored.	",
        type: "text",
        required: false,
        default: "0",
        placeholder: "0, 1, 2, 3, 4 and etc.",
        visible: true
      },
      {
        label: "Skip Data Lines",
        id: "skipDataLines",
        description: "Number of data lines which would be skipped after the column header.",
        type: "text",
        required: false,
        default: "0",
        placeholder: "0, 1, 2, 3, 4 and etc.",
        visible: true
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        visible: true
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log",
        visible: false
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        required: "true",
        options: [{
            value: "INFO",
            text: "Info"
          },
          {
            value: "DEBUG",
            text: "Debug"
          },
          {
            value: "TRACE",
            text: "Trace"
          }
        ],
        visible: false,
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        required: true,
        options: [{
            value: "windows",
            text: "Windows"
          },
          {
            value: "linux",
            text: "Linux"
          },
          {
            value: "mac",
            text: "Mac"
          }
        ],
        visible: true
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
        description: "The JDBC connection string to use. For SQLite, enter SQLITE",
        default: "SQLITE",
        type: "text",
        required: false,
        placeholder: "SQLITE",
        visible: true
      },
      {
        label: "Query",
        id: "op",
        description: "The choice of what the program will do, namely create a database, add tables to it, run an SQL query.",
        required: true,
        type: "select",
        options: [{
            value: "",
            text: ""
          }, {
            value: "createDB",
            text: "createDB"
          },
          {
            value: "importTable",
            text: "importTable"
          },
          {
            value: "queryDB",
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
        default: "",
        visible: true
      },
      {
        label: "Database name",
        id: "db",
        description: "The expected name and place where the SQL database will be created. The name should ends on .db.	",
        validate: ".*.db$",
        type: "text",
        required: true,
        default: "",
        placeholder: "shop.db, directory/shop.db",
        visible: true
      },
      {
        label: "Source file",
        id: "srcFile",
        description: "A delimited file is needed to create or add data from it to the SQLite database. Used in importTable option.",
        validate: ".*.csv$|.*.txt$",
        type: "text",
        required: true,
        default: "",
        placeholder: "file.csv, file.txt",
        visible: false
      },
      {
        label: "Table",
        id: "table",
        description: "The name of the table in the SQLite database. This name can be anything. Used in importTable option.",
        type: "text",
        required: true,
        default: "",
        placeholder: "table, ABCD",
        visible: false
      },
      {
        label: "Delimiter",
        id: "delim",
        description: "Delimiter of the source file. Used in importTable and queryDB option.",
        type: "text",
        required: false,
        default: ",",
        placeholder: "0, ; |",
        maxlength: "1",
        visible: false
      },
      {
        label: "Mode",
        id: "mode",
        description: "The way to work with the table. You can either overwrite or create a table or add data to the end of the table. Used in importTable option.	",
        required: false,
        default: "APPEND",
        type: "select",
        options: [{
            value: "APPEND",
            text: "APPEND"
          },
          {
            value: "OVERWRITE",
            text: "OVERWRITE"
          }
        ],
        visible: false
      },
      {
        label: "Query",
        id: "query",
        description: "SQL request which will be used for getting specific data from a SQLite database. Used in queryDB option.",
        type: "text",
        required: true,
        default: "",
        placeholder: "query.txt, SELECT * from table",
        visible: false
      },
      {
        label: "Return",
        id: "return",
        type: "select",
        description: "Shows whether or not the program displays the result. Used in queryDB option.",
        required: false,
        default: "FALSE(except queryDB option it is TRUE)	",
        options: [{
            value: "yes",
            text: "Yes"
          },
          {
            value: "no",
            text: "No"
          }
        ],
        visible: false
      },
      {
        label: "Destination File",
        id: "destFile",
        description: "File in which the result of the SQL query will be written. If the file exists, it will be overwritten. Used in queryDB option.",
        type: "text",
        validate: ".*.txt$",
        required: false,
        default: "Console output",
        placeholder: "file.txt, directory/file.txt",
        visible: false
      },
      {
        label: "Header",
        id: "header",
        type: "select",
        description: "Shows whether or not the program displays the table header. Used in queryDB option.",
        required: false,
        default: "FALSE",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        visible: false
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        visible: true
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log",
        visible: false
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        required: "true",
        options: [{
            value: "INFO",
            text: "Info"
          },
          {
            value: "DEBUG",
            text: "Debug"
          },
          {
            value: "TRACE",
            text: "Trace"
          }
        ],
        visible: false,
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        required: true,
        options: [{
            value: "windows",
            text: "Windows"
          },
          {
            value: "linux",
            text: "Linux"
          },
          {
            value: "mac",
            text: "Mac"
          }
        ],
        visible: true
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
        description: "A .json or .xml to be used as a source for the sql query.",
        default: "",
        type: "text",
        required: true,
        placeholder: "test.json",
        validate: ".*.json$|.*.xml$",
        visible: true
      },
      {
        label: "Destination file",
        id: "destFile",
        description: "A .json or .xml or .txt file to used as a destination.",
        default: "",
        type: "text",
        required: true,
        placeholder: "test.txt",
        validate: ".*.txt$|.*.json$|.*.xml$",
        visible: true
      },
      {
        label: "SQL Query",
        id: "query",
        description: "A select query to be performed against the source file",
        default: "",
        type: "text",
        required: true,
        placeholder: "select * from test",
        validate: "select.*",
        visible: true
      },
      {
        label: "Delimiter",
        id: "delimiter",
        description: "This parameter will be used to delimiter results in a txt file.",
        default: "",
        type: "text",
        required: false,
        placeholder: ",, #",
        validate: "select.*",
        maxlength: "1",
        visible: true
      },
      {
        label: "Headers",
        id: "headers",
        description: "This parameter will be used to include the headers results in a txt file.",
        default: "",
        type: "select",
        options: [{
          value: "",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        required: false,
        maxlength: "1",
        visible: true
      },
      {
        label: "Custom log file",
        id: "customlogfile",
        type: "select",
        options: [{
          value: "no",
          text: "No"
        }, {
          value: "yes",
          text: "Yes"
        }],
        change: [{
          value: ["yes"],
          showIds: ["log", "loglevel"],
          requiredIds: ["log", "loglevel"]
        }],
        visible: true
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log",
        visible: false
      },
      {
        label: "Log level",
        id: "loglevel",
        type: "select",
        required: "true",
        options: [{
            value: "INFO",
            text: "Info"
          },
          {
            value: "DEBUG",
            text: "Debug"
          },
          {
            value: "TRACE",
            text: "Trace"
          }
        ],
        visible: false,
      },
      {
        label: "Ouput",
        id: "output",
        type: "select",
        required: true,
        options: [{
            value: "windows",
            text: "Windows"
          },
          {
            value: "linux",
            text: "Linux"
          },
          {
            value: "mac",
            text: "Mac"
          }
        ],
        visible: true
      }
    ]
  }
];