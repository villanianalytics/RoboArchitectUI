var sql = {
    name: "Sql",
    id: "sql",
    description: "Allows a user to create SQLite database, create table or add data to it by using file with delimiter.",
    cmd: {
        linux: "RoboArchitect -sql /connection /op /db /srcFile /table /delim /mode /query /return /destFile /header /log /logLevel",
        windows: "RoboArchitect.exe -sql /connection /op /db /srcFile /table /delim /mode /query /return /destFile /header /log /logLevel",
        mac: "RoboArchitect -sql /connection /op /db /srcFile /table /delim /mode /query /return /destFile /header /log /logLevel"
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
                requiredIds: ["srcFile", "table", "mode"]
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
                required: true,
            },
            options: [{
                    attributes: {
                        value: ""
                    },
                    text: ""
                }, {
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
                required: false,
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
                showIds: ["log", "logLevel"],
                requiredIds: ["log", "logLevel"]
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
                pattern: ".*.log$",
            },
            helper: "File to which the program logs will be written. If this parameter is not specified, then all the logs will be written to the logs.log file."
        },
        {
            label: "Log level",
            id: "logLevel",
            type: "select",
            visible: false,
            attributes: {
                type: "select",
                id: "logLevel",
                name: "logLevel",
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