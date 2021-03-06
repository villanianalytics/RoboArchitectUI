var email = {
    name: "Email",
    id: "email",
    description: "You could send an email with or without an attached file to another person.",
    cmd: {
        linux: "RoboArchitect -email /subject /body /config /passwordFile /log /logLevel",
        windows: "RoboArchitect.exe -email /subject /body /config /passwordFile /log /logLevel",
        mac: "RoboArchitect -email /subject /body /config /passwordFile /log /logLevel"
    },
    fields: [{
            label: "Configuration file ",
            id: "config",
            type: "modal",
            required: true,
            default: "",
            visible: true,
            attributes: {
                id: "config",
                name: "config",
                required: true,
                rows: 20,
                class: "form-control roboreadonly",
                placeholder: "Email Properties\nfromaddress=email@gmail.com\n# If you do not have an encrypted password file.\npassword=password\ntoaddress=emailTo@gmail.com\n# Optional.\nccaddress=copyEmail@xrpmail.com\n# Optional.\nbccaddress=sicretCopyEmail@enayu.com\nsubject=Here must be a subject of a letter.\n# If you want to send a message as HTML text you should pass Y else N.\nhtmlbody=Y\nbody=<h1> Here could be a text. </h1>\n# Optional.\nattachment=file.txt\nctype=TLS\nsmtpserver=smtp.gmail.com\nport=587\n# SSL -> port 465; TLS -> port 587."
            },
            subfields: [{
                    label: "From address",
                    id: "config_fromaddress",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "email",
                        id: "config_fromaddress",
                        name: "fromaddress",
                        placeholder: "email@gmail.com",
                        class: "form-control",
                        required: true,
                    }
                },
                {
                    label: "Password",
                    id: "config_password",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "password",
                        id: "config_password",
                        name: "password",
                        placeholder: "password",
                        class: "form-control",
                        required: false,
                    }
                },
                {
                    label: "To Address",
                    id: "config_toaddress",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "email",
                        id: "config_toaddress",
                        name: "toaddress",
                        placeholder: "emailTo@gmail.com",
                        class: "form-control",
                        required: true,
                    }
                },
                {
                    label: "CC Address",
                    id: "config_ccaddress",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "email",
                        id: "config_ccaddress",
                        name: "ccaddress",
                        placeholder: "copyEmail@xrpmail.com",
                        class: "form-control",
                        required: false,
                    }
                },
                {
                    label: "BCC Address",
                    id: "config_bccaddress",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "email",
                        id: "config_bccaddress",
                        name: "bccaddress",
                        placeholder: "sicretCopyEmail@enayu.com",
                        class: "form-control",
                        required: false,
                    }
                },
                {
                    label: "Subject",
                    id: "config_subject",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "text",
                        id: "config_subject",
                        name: "subject",
                        placeholder: "Test subject",
                        class: "form-control",
                        required: true,
                    }
                },
                {
                    label: "Body",
                    id: "config_body",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "text",
                        id: "config_body",
                        name: "body",
                        placeholder: "<h1>test</h1>",
                        class: "form-control",
                        required: false,
                    }
                },
                {
                    label: "Attachment",
                    id: "config_attachment",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "text",
                        id: "config_attachment",
                        name: "attachment",
                        placeholder: "file.txt",
                        class: "form-control",
                        required: false,
                    }
                },
                {
                    label: "CType",
                    id: "config_ctype",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "text",
                        id: "config_ctype",
                        name: "ctype",
                        placeholder: "TLS",
                        class: "form-control",
                        required: false,
                    }
                },
                {
                    label: "SMTP server",
                    id: "config_smtpserver",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "text",
                        id: "config_smtpserver",
                        name: "smtpserver",
                        placeholder: "smtp.gmail.com",
                        class: "form-control",
                        required: false,
                    }
                },
                {
                    label: "Port",
                    id: "config_port",
                    type: "text",
                    visible: true,
                    attributes: {
                        type: "text",
                        id: "config_port",
                        name: "port",
                        placeholder: "587",
                        class: "form-control",
                        required: false,
                    }
                }
            ],
            helper: "Configuration file with email details more detail."
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