var compress = {
    name: "Compress",
    id: "compress",
    description: "Archives file or directory and save it in a specified directory.",
    cmd: {
        linux: "RoboArchitect -compress /src /destFile /log /logLevel",
        windows: "RoboArchitect.exe -compress /src /destFile /log /logLevel",
        mac: "RoboArchitect -compress /src /destFile /log /logLevel"
    },
    fields: [{
            label: "Source file or folder",
            id: "src",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "src",
                name: "src",
                placeholder: "example.txt",
                class: "form-control",
                required: true,
            },
            helper: "Directory or file that will be archived to a file.",
        },
        {
            label: "Destination archive file",
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
                pattern: ".*.zip$|.*.tar$|.*.7z$|.*.jar$|.*.tar.gz$",
            },
            helper: "archive (zip, tar, 7z, jar, tar.gz) file in which all selected files and directories will be placed. If the file exists, it will be overwritten.	",
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