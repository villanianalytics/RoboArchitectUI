var data = [{
    name: "Zip",
    id: "zip",
    description: "Archives file or directory and save it in a specified directory.",
    cmd: {
      linux: "RoboArchitect -zip /srcDir /destFile /log",
      windows: "RoboArchitect.exe -zip /srcDir /destFile /log",
      mac: "RoboArchitect -zip /srcDir /destFile /log"
    },
    fields: [{
        label: "Source file or folder",
        id: "srcDir",
        description: "Directory or file that will be archived to a .zip file.",
        type: "text",
        required: true,
        command: "/srcDir",
        default: "",
        placeholder: "C:\\testFile.zip"
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
        placeholder: "C:\\testFile.zip"
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "logs.log"
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
        ]
      }
    ]
  },
  {
    name: "UnZip",
    id: "unzip",
    description: "Unzip .zip file to a specified directory.",
    cmd: {
      linux: "RoboArchitect -unzip /srcFile /destDir /log",
      windows: "RoboArchitect.exe -zip /srcFile /destDir /log",
      mac: "RoboArchitect -zip /srcFile /destDir /log"
    },
    fields: [{
        label: "Source file",
        id: "srcFile",
        description: ".zip file with files or directories.",
        validate: ".*.zip$",
        type: "text",
        required: true,
        default: "",
        placeholder: "file.zip, zip/example.zip"
      },
      {
        label: "Destination directory",
        id: "destDir",
        type: "text",
        description: "The directory where the zip file will be unpacked. If the same files exist in this directory, they will be overwritten.",
        required: true,
        default: "",
        placeholder: "unzipped, example/directory"
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.	",
        required: false,
        command: "/log",
        placeholder: "logs.log",
        default: "text.txt, log.txt"
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
          }
        ]
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
        description: "A .csv or .xlsx file to be converted to a .xlsx or .csv file, respectively.",
        validate: ".*.csv$|.*.xlsx$",
        default: "",
        type: "text",
        required: true,
        placeholder: "file.csv, file.txt, file.xlsx, dir/example.txt"
      },
      {
        label: "Destination file",
        id: "destFile",
        type: "text",
        description: "File in which the source file would be formatted. If the file exists, it will be overwritten.	",
        required: false,
        default: "File.xlsx Or File.csv depending on /srcFile",
        placeholder: "file.xlsx, file.csv, file.txt, converted/file.csv"
      },
      {
        label: "Delimiter",
        id: "delim",
        type: "text",
        description: 'Any single character file separator. Common delimiters are "," or "|" .	',
        maxlength: "1",
        required: false,
        default: "",
        placeholder: ", ; |"
      },
      {
        label: "Sheet name",
        id: "sheetname",
        type: "text",
        description: "The name of the .xlsx sheet needed to sign the .xlsx file or to convert the specified sheet to a .csv file.	",
        required: false,
        default: "Sheet1",
        placeholder: "ABCD, SheetName1, Unnamed"
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        required: false,
        command: "/log",
        placeholder: "text.txt, log.txt",
        default: "logs.log"
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
          }
        ]
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
        placeholder: "password.txt, encrypted/file.txt"
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.	",
        required: false,
        command: "/log",
        placeholder: "text.txt, log.txt",
        default: "logs.log"
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
          }
        ]
      }
    ]
  },
  {
    name: "Connect",
    id: "connect",
    description: "Connect to specified url with required username and password, then get a response and save it to a file.",
    cmd: {
      linux: "RoboArchitect -connect /destFile /config /jsonPath /passwordFile /reqType	/srcFile /body /mediaType /log",
      windows: "RoboArchitect.exe -connect /destFile /config /jsonPath /passwordFile /reqType	/srcFile /body /mediaType /log",
      mac: "RoboArchitect -connect /destFile /config /jsonPath /passwordFile /reqType	/srcFile /body /mediaType /log"
    },
    fields: [{
        label: "Destination file ",
        id: "destFile",
        description: "File in which the response from the web service will be saved. If the file exists, it will be overwritten. If this parameter is not specified, the result will be displayed on the console.",
        type: "text",
        required: false,
        default: "Console output",
        placeholder: "file.txt, response.json"
      },
      {
        label: "Configuration file ",
        id: "config",
        description: "Configuration file in which field such as url should be passed.",
        type: "text",
        required: true,
        default: "",
        validate: ".*.properties$|.*.txt$",
        placeholder: "config.properties, config.txt"
      },
      {
        label: "Json path",
        id: "jsonPath",
        description: "Path to a specific part of the expected JSON response from the web server. If this parameter is not specified, the full response will be displayed.",
        type: "text",
        required: false,
        default: "",
        placeholder: "$.id"
      },
      {
        label: "Password file",
        id: "passwordFile",
        description: "File in which your encrypted password is stored. If this parameter is not specified it would use a password from a config file.",
        type: "text",
        required: false,
        default: "password in a config file.",
        placeholder: "password.txt, directory/file.txt"
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
      },
      {
        label: "Source file",
        id: "srcFile",
        description: "File which would be attached to your POST or PUT method.	",
        type: "text",
        required: false,
        default: "",
        placeholder: "table.db, text.txt, image.png"
      },
      {
        label: "Body",
        id: "body",
        description: "Text which would be send in the POST method.",
        type: "text",
        required: false,
        default: "",
        placeholder: "Any text with \\n new lines and \\t tabs"
      },
      {
        label: "Media Type",
        id: "mediaType",
        description: "Type of the files which would be sent to a web service.",
        type: "text",
        required: false,
        default: "application/json	",
        placeholder: "application/json, text/html, multipart/form-data and etc"
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.	",
        type: "text",
        required: false,
        placeholder: "text.txt, log.txt",
        default: "logs.log"
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
        ]
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
        placeholder: "file.json, file.txt"
      },
      {
        label: "Json Path",
        id: "jsonPath",
        description: "Path to a specific part of the expected JSON taken from the source file.",
        type: "text",
        required: true,
        default: "",
        placeholder: "$.id"
      },
      {
        label: "Destination file",
        id: "destFile",
        description: "File in which the filtered response will be saved. If the file exists, it will be overwritten. If this parameter is not specified, the result will be displayed on the console.",
        type: "text",
        required: false,
        default: "Console output",
        placeholder: "file.txt, response.json"
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.	",
        required: false,
        placeholder: "text.txt, log.txt",
        default: "logs.log"
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
        ]
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
        placeholder: "Subject of a letter"
      },
      {
        label: "Body",
        id: "body",
        description: "Body of an email. It could have new lines and tab characters. New line should be \\n and tab should be \\t.",
        type: "text",
        required: false,
        default: "",
        placeholder: "Text of an email with new lines \\n and tabs \\t."
      },
      {
        label: "Configuration file",
        id: "config",
        description: "Config file with email details more detail.	",
        type: "text",
        required: true,
        default: "",
        placeholder: "config.properties, config.txt"
      },
      {
        label: "Password file",
        id: "passwordFile",
        description: "File in which your encrypted password is stored. If this parameter is not specified it would use a password from a config file.",
        type: "text",
        required: false,
        default: "password in a config file.",
        placeholder: "password.txt, directory/file.txt"
      },
      {
        label: "Log file",
        id: "log",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.",
        type: "text",
        required: false,
        default: "logs.log",
        placeholder: "text.txt, log.txt"
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
        ]
      }
    ]
  },
  {
    name: "Query delimiter",
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
        placeholder: "file.txt, file.csv"
      },
      {
        label: "Query",
        id: "query",
        description: "SQL request which will be used for getting specific data from a source file.",
        type: "text",
        required: true,
        default: "",
        placeholder: "SELECT * from table"
      },
      {
        label: "Delimiter",
        id: "delim",
        description: "Delimiter of the source file.",
        type: "text",
        required: false,
        default: ",",
        maxlength: "1",
        placeholder: ", ; |"
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
      },
      {
        label: "Skip lines",
        id: "skipLines",
        description: "Number of lines in the file which would be ignored.	",
        type: "text",
        required: false,
        default: "0",
        placeholder: "0, 1, 2, 3, 4 and etc."
      },
      {
        label: "Skip Data Lines",
        id: "skipDataLines",
        description: "Number of data lines which would be skipped after the column header.",
        type: "text",
        required: false,
        default: "0",
        placeholder: "0, 1, 2, 3, 4 and etc."
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.	",
        required: false,
        placeholder: "text.txt, log.txt",
        default: "logs.log"
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
        ]
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
        placeholder: "SQLITE"
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
          value: "importTable",
          showIds: ["srcFile", "table", "delim", "mode"],
          requiredIds: ["srcFile", "table"]
        }, {
          value: "queryDB",
          showIds: ["query", "return", "destFile", "header"],
          requiredIds: ["query", "return", "destFile", "header"]
        }],
        default: "",
      },
      {
        label: "Database name",
        id: "db",
        description: "The expected name and place where the SQL database will be created. The name should ends on .db.	",
        validate: ".*.db$",
        type: "text",
        required: true,
        default: "",
        placeholder: "shop.db, directory/shop.db"
      },
      {
        label: "Source file",
        id: "srcFile",
        description: "A delimited file is needed to create or add data from it to the SQLite database. Used in importTable option.",
        validate: ".*.csv$|.*.txt$",
        type: "text",
        required: true,
        default: "",
        placeholder: "file.csv, file.txt"
      },
      {
        label: "Table",
        id: "table",
        description: "The name of the table in the SQLite database. This name can be anything. Used in importTable option.",
        type: "text",
        required: true,
        default: "",
        placeholder: "table, ABCD"
      },
      {
        label: "Delimiter",
        id: "delim",
        description: "Delimiter of the source file. Used in importTable and queryDB option.",
        type: "text",
        required: false,
        default: ",",
        placeholder: "0, ; |",
        maxlength: "1"
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
        ]
      },
      {
        label: "Query",
        id: "query",
        description: "SQL request which will be used for getting specific data from a SQLite database. Used in queryDB option.",
        type: "text",
        required: true,
        default: "",
        placeholder: "query.txt, SELECT * from table"
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
        ]
      },
      {
        label: "Destination File",
        id: "destFile",
        description: "File in which the result of the SQL query will be written. If the file exists, it will be overwritten. Used in queryDB option.",
        type: "text",
        validate: ".*.txt$",
        required: false,
        default: "Console output",
        placeholder: "file.txt, directory/file.txt"
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
        }]
      },
      {
        label: "Log file",
        id: "log",
        type: "text",
        description: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file.	",
        required: false,
        placeholder: "text.txt, log.txt",
        default: "logs.log"
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
        ]
      }
    ]
  }
];