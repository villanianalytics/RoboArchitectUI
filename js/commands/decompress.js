var decompress = {
    name: "Decompress",
    id: "decompress",
    description: "Decompress archive files to a specified directory.",
    cmd: {
        linux: "RoboArchitect -decompress /srcFile /destDir /log /logLevel",
        windows: "RoboArchitect.exe -decompress /srcFile /destDir /log /logLevel",
        mac: "RoboArchitect -decompress /srcFile /destDir /log /logLevel"
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
                pattern: ".*.zip$|.*.tar$|.*.7z$|.*.jar$|.*.tar.gz$",
                required: true,
            },
            helper: "A archive (zip, tar, 7z, jar, tar.gz) file with files or directories."
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
            helper: "The directory where the archive file will be unpacked. If the same files exist in this directory, they will be overwritten."
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