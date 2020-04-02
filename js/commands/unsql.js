var unsql = {
    name: "UnSql",
    id: "unsql",
    description: "Allows a user to run select queries in xml and json files",
    cmd: {
        linux: "RoboArchitect -unsql /srcFile /destFile /query /delimiter /headers /log /logLevel",
        windows: "RoboArchitect.exe -unsql /srcFile /destFile /query /delimiter /headers /log /logLevel",
        mac: "RoboArchitect -unsql /srcFile /destFile /query /delimiter /headers /log /logLevel"
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