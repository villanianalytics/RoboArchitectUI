var hierarchy = {
    name: "Hierarchy",
    id: "hierarchy",
    description: "This command is used to convert parent/child based hierarchy files into level-based files",
    cmd: {
        linux: "RoboArchitect -hierarchy /srcFile /destFile /convertType /totalAttrib /srcDelim /destDelim /headerFlag /customHeader /parentColIndex /childColIndex/log /logLevel",
        windows: "RoboArchitect.exe -hierarchy /srcFile /destFile /convertType /totalAttrib /srcDelim /destDelim /headerFlag /customHeader /parentColIndex /childColIndex /log /logLevel",
        mac: "RoboArchitect -hierarchy /srcFile /destFile /convertType /totalAttrib /srcDelim /destDelim /headerFlag /customHeader /parentColIndex /childColIndex /log /logLevel"
    },
    fields: [
        {
            label: "Source file",
            id: "srcFile",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "srcFile",
                name: "srcFile",
                placeholder: "file.csv",
                pattern: ".*.csv$|.*.txt$|.*.xlsx$",
                class: "form-control",
                required: true,
            },
            helper: "Source file in txt, csv or xlsx format."
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
                pattern: ".*.csv$|.*.txt$|.*.xlsx$",
                class: "form-control",
                required: true,
            },
            helper: "Destination file in txt, csv or xlsx format."
        },
        {
            label: "Convert type",
            id: "convertType",
            type: "select",
            visible: true,
            attributes: {
                type: "select",
                id: "convertType",
                name: "convertType",
                class: "form-control",
                required: true
            },
            options: [{
                attributes: {
                    value: "lb"
                },
                text: "Level-based"
            }, {
                attributes: {
                    value: "pc"
                },
                text: "Parent-child"
            }],
            change: [{
                value: ["pc"],
                showIds: ["totalAttrib"],
                requiredIds: ["totalAttrib"]
            }],
            helper: "Convert type i.e lb to level-based and pc to parent-child. Default is lb",
        },
        {
            label: "Total",
            id: "totalAttrib",
            type: "text",
            visible: false,
            attributes: {
                type: "text",
                id: "totalAttrib",
                name: "totalAttrib",
                placeholder: "3",
                class: "form-control",
                required: false,
            },
            helper: "Total number of attributes in Destination file. REQUIRED ONLY FOR LEVEL-BASED back to PARENT-CHILD conversion, int value i.e 7"
        },
        {
            label: "Source Delimiter",
            id: "srcDelim",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "srcDelim",
                name: "srcDelim",
                placeholder: ", ; |",
                class: "form-control",
                required: false,
            },
            helper: "Source file delimiter. Default is ,"
        },
        {
            label: "Destination Delimiter",
            id: "destDelim",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "destDelim",
                name: "destDelim",
                placeholder: ", ; |",
                class: "form-control",
                required: false,
            },
            helper: "Destination file delimiter Default is ,"
        },
        {
            label: "Header in source file",
            id: "headerFlag",
            type: "select",
            visible: true,
            attributes: {
                type: "select",
                id: "headerFlag",
                name: "headerFlag",
                class: "form-control",
                required: true
            },
            options: [{
                attributes: {
                    value: "Y"
                },
                text: "Yes"
            },
            {
                attributes: {
                    value: "N"
                },
                text: "No"
            }],
            change: [{
                value: ["N"],
                showIds: ["parentColIndex", "childColIndex"],
                requiredIds: []
            }],
            helper: "If header is present in source file",
        },
        {
            label: "Custom header",
            id: "customHeader",
            type: "text",
            visible: true,
            attributes: {
                type: "text",
                id: "customHeader",
                name: "customHeader",
                placeholder: "Parent,Child,Attrib1,attrib2",
                class: "form-control",
                required: false,
            },
            helper: "Specify custom header in output file in comma seperated values i.e Parent,Child,Attrib1,attrib2,..."
        },
        {
            label: "Parent column index",
            id: "parentColIndex",
            type: "text",
            visible: false,
            attributes: {
                type: "text",
                id: "parentColIndex",
                name: "parentColIndex",
                placeholder: "3",
                class: "form-control",
                required: false,
            },
            helper: "Specify parent column number (default is second column)"
        },
        {
            label: "Child column index",
            id: "childColIndex",
            type: "text",
            visible: false,
            attributes: {
                type: "text",
                id: "childColIndex",
                name: "childColIndex",
                placeholder: "3",
                class: "form-control",
                required: false,
            },
            helper: "Specify child column number (default is first column)"
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