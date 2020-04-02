var querydelim = {
    name: "Query file",
    id: "querydelim",
    description: "Allows a user to run SQL against a .csv/.txt file.",
    cmd: {
        linux: "RoboArchitect -querydelim /srcFile /query /delim /destFile /suppressHeaders /skipLines /skipDataLines /log",
        windows: "RoboArchitect.exe -querydelim /srcFile /query /delim /destFile /suppressHeaders /skipLines /skipDataLines /log",
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
                validate: ".*.log$",
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