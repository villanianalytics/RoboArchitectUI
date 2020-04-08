var sftp = {
    name: "Sftp",
    id: "sftp",
    description: "Upload and download using sftp connection.",
    cmd: {
        linux: "RoboArchitect -sftp /type /password /passwordFile /host /port /userName /fromFile /toFile /log /logLevel",
        windows: "RoboArchitect.exe -sftp /type /password /passwordFile /host /port /userName /fromFile /toFile /log /logLevel",
        mac: "RoboArchitect -sftp /type /password /passwordFile /host /port /userName /fromFile /toFile /log /logLevel"
    },
    fields: [
        {
            label: "Type",
            id: "type",
            type: "select",
            visible: true,
            attributes: {
                type: "select",
                id: "type",
                name: "type",
                class: "form-control",
                required: true
            },
            options: [{
                attributes: {
                    value: "download"
                },
                text: "Download"
            }, {
                attributes: {
                    value: "upload"
                },
                text: "Upload"
            }],
            helper: "The type of operantion to be performed",
        },
        {
            label: "Password type",
            id: "passwordType",
            type: "select",
            visible: true,
            attributes: {
                type: "select",
                id: "passwordType",
                name: "passwordType",
                class: "form-control",
                required: true
            },
            options: [{
                attributes: {
                    value: ""
                },
                text: ""
            }, {
                attributes: {
                    value: "passwordRaw"
                },
                text: "PasswordRaw"
            }, {
                attributes: {
                    value: "passwordFile"
                },
                text: "Password file"
            },
            {
                attributes: {
                    value: "privateKey"
                },
                text: "Private key"
            }],
            change: [{
                value: ["passwordRaw"],
                showIds: ["password"],
                requiredIds: ["password"]
            }, {
                value: ["passwordFile"],
                showIds: ["passwordFile"],
                requiredIds: ["passwordFile"]
            }, {
                value: ["privateKey"],
                showIds: ["privateKey"],
                requiredIds: ["privateKey"]
            }],
            helper: "The type of password to be provided.",
        },
        {
            label: "Password",
            id: "password",
            type: "text",
            visible: false,
            attributes: {
                type: "text",
                id: "password",
                name: "password",
                placeholder: "testpassword",
                class: "form-control",
                required: true,
            },
            helper: "The password to access the server.",
        },
        {
            label: "Password File",
            id: "passwordFile",
            type: "text",
            visible: false,
            attributes: {
                type: "text",
                id: "passwordFile",
                name: "passwordFile",
                placeholder: "/test/password.txt",
                class: "form-control",
                required: true,
            },
            helper: "A file containing the password.",
        },
        {
            label: "Private key",
            id: "privateKey",
            type: "text",
            visible: false,
            attributes: {
                type: "text",
                id: "privateKey",
                name: "privateKey",
                placeholder: "/test/key.pem",
                class: "form-control",
                required: true,
            },
            helper: "A private key to connect to the server.",
        },
        {
            label: "Host",
            id: "host",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "host",
                name: "host",
                placeholder: "test.server.com",
                class: "form-control",
                required: true,
            },
            helper: "The server host name or ip",
        },
        {
            label: "Port",
            id: "port",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "port",
                name: "port",
                placeholder: "21",
                class: "form-control",
                required: true,
            },
            helper: "The server port, by default it uses 21",
        }, {
            label: "Username",
            id: "userName",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "userName",
                name: "userName",
                placeholder: "testUser",
                class: "form-control",
                required: true,
            },
            helper: "The user name to be used to connect to the server.",
        },
        {
            label: "Original path file",
            id: "fromFile",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "fromFile",
                name: "fromFile",
                placeholder: "/test/test.txt",
                class: "form-control",
                required: true,
            },
            helper: "The location of the origine file, if type is upload local file location, if type is download local file location in the server.",
        },
        {
            label: "Destination path file",
            id: "toFile",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "toFile",
                name: "toFile",
                placeholder: "/test/test.txt",
                class: "form-control",
                required: true,
            },
            helper: "The location of the destination file, if type is upload file location in the server, if type is download local file location.",
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