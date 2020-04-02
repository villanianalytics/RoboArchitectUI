var jsonpath = {
    name: "JsonPath",
    id: "jsonpath",
    description: "Json path is needed to filter a JSON file and take from there just a needed part. It takes the needful part of a JSON by a pattern",
    cmd: {
        linux: "RoboArchitect -jsonpath /srcFile /jsonPath /destFile /log /logLevel",
        windows: "RoboArchitect.exe -jsonpath /srcFile /jsonPath /destFile /log /logLevel",
        mac: "RoboArchitect -jsonpath /srcFile /jsonPath /destFile /log /logLevel"
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