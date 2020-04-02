var connect = {
    name: "Connect",
    id: "connect",
    description: "Connect to specified url with required username and password, then get a response and save it to a file.",
    cmd: {
        linux: "RoboArchitect -connect /destFile /config /jsonPath /query /delimiter /passwordFile /reqType /srcFile /body /mediaType /log /logLevel",
        windows: "RoboArchitect.exe -connect /destFile /config /jsonPath /query /delimiter /passwordFile /reqType /srcFile /body /mediaType /log /logLevel",
        mac: "RoboArchitect -connect /destFile /config /jsonPath /query /delimiter /passwordFile /reqType /srcFile /body /mediaType /log /logLevel"
    },
    fields: [{
            label: "Configuration file ",
            id: "config",
            description: "Configuration file in which field such as url should be passed.",
            type: "modal",
            required: true,
            attributes: {
                id: "config",
                name: "config",
                required: true,
                rows: 4,
                class: "form-control roboreadonly",
                placeholder: "url=url\nuser=username\npassword=password"
            },
            default: "",
            visible: true,
            subfields: [{
                    label: "URL",
                    id: "url",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "text",
                        id: "config_url",
                        name: "url",
                        placeholder: "url",
                        class: "form-control",
                        required: false,
                    }
                },
                {
                    label: "User",
                    id: "user",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "text",
                        id: "config_user",
                        name: "user",
                        placeholder: "username",
                        class: "form-control",
                        required: false,
                    }
                },
                {
                    label: "Password",
                    id: "password",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "text",
                        id: "config_password",
                        name: "password",
                        placeholder: "password",
                        class: "form-control",
                        required: false,
                    }
                }
            ]
        },
        {
            label: "Password file",
            id: "passwordFile",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "passwordFile",
                name: "passwordFile",
                placeholder: "password.txt",
                class: "form-control",
                pattern: ".*.txt$",
                required: false,
            },
            helper: "File in which your encrypted password is stored. If this parameter is not specified it would use a password from a config file."
        },
        {
            label: "Media Type",
            id: "mediaType",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "mediaType",
                name: "mediaType",
                placeholder: "application/json",
                class: "form-control",
                required: false,
            },
            helper: "Type of the files which would be sent to a web service."
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
            helper: "File in which the response from the web service will be saved. If the file exists, it will be overwritten. If this parameter is not specified, the result will be displayed on the console."
        },
        {
            label: "Request type",
            id: "reqType",
            type: "select",
            visible: true,
            attributes: {
                type: "select",
                id: "reqType",
                name: "reqType",
                class: "form-control",
                required: true
            },
            options: [{
                    attributes: {
                        value: "GET"
                    },
                    text: "GET"
                },
                {
                    attributes: {
                        value: "HEAD"
                    },
                    text: "HEAD"
                },
                {
                    attributes: {
                        value: "POST"
                    },
                    text: "POST"
                },
                {
                    attributes: {
                        value: "PUT"
                    },
                    text: "PUT"
                },
                {
                    attributes: {
                        value: "PATCH"
                    },
                    text: "PATCH"
                },
                {
                    attributes: {
                        value: "DELETE"
                    },
                    text: "DELETE"
                }
            ],
            change: [{
                value: ["POST", "PUT"],
                showIds: ["srcFile", "body"],
                requiredIds: []
            }],
            helper: "Change the http method. If this parameter is not specified, then the GET method will be used by default."
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
                placeholder: "able.db",
                class: "form-control",
                required: false,
            },
            helper: "File which would be attached to your POST or PUT method."
        },
        {
            label: "Body",
            id: "body",
            type: "text",
            visible: false,
            attributes: {
                type: "text",
                id: "body",
                name: "body",
                placeholder: "Any text with \\n new lines and \\t tabs",
                class: "form-control",
                required: false,
            },
            helper: "Text which would be send in the POST method."
        },
        {
            label: "Filtering type",
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
                        value: ""
                    },
                    text: ""
                }, {
                    attributes: {
                        value: "jsonPath"
                    },
                    text: "JsonPath"
                },
                {
                    attributes: {
                        value: "sql"
                    },
                    text: "SQL"
                }
            ],
            change: [{
                value: ["jsonPath"],
                showIds: ["jsonPath"],
                requiredIds: ["jsonPath"]
            }, {
                value: ["sql"],
                showIds: ["query", "delimiter"],
                requiredIds: ["query"]
            }],
            helper: "Type of filtering"
        },
        {
            label: "Json path",
            id: "jsonPath",
            type: "text",
            visible: false,
            attributes: {
                type: "text",
                id: "jsonPath",
                name: "jsonPath",
                placeholder: "$.id",
                class: "form-control",
                required: false,
            },
            helper: "Path to a specific part of the expected JSON response from the web server. If this parameter is not specified, the full response will be displayed."
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
                placeholder: "select * from table",
                class: "form-control",
                required: false,
            },
            helper: "Sql query."
        },
        {
            label: "Delimiter",
            id: "delimiter",
            type: "text",
            visible: false,
            attributes: {
                type: "text",
                id: "delimiter",
                name: "delimiter",
                placeholder: "| , ; , #",
                maxlength: 1,
                class: "form-control",
                required: false,
            },
            helper: "Delimiter"
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