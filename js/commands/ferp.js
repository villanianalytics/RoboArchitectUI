var ferp = {
    name: "Find and Replace",
    id: "ferp",
    description: "Finds a value in file and replace it.",
    cmd: {
        linux: "RoboArchitect -ferp /file /find /replace /log /logLevel",
        windows: "RoboArchitect.exe -ferp /file /find /replace /log /logLevel",
        mac: "RoboArchitect -ferp /file /find /replace /log /logLevel"
    },
    fields: [{
            label: "Source file",
            id: "file",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "file",
                name: "file",
                placeholder: "example.txt",
                class: "form-control",
                required: true,
            },
            helper: "Orginal file to be scanned.",
        },
        {
            label: "Find value",
            id: "find",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "find",
                name: "find",
                placeholder: "test",
                class: "form-control",
                required: true,
            },
            helper: "String or regular expression to find in file",
        },
        {
            label: "Replacer value",
            id: "replace",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "replace",
                name: "replace",
                placeholder: "testreplacer",
                class: "form-control",
                required: true,
            },
            helper: "String value to be replaced",
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