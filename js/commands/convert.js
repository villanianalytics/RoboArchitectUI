var convert = {
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