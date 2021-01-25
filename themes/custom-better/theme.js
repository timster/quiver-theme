const white = "#ffffff";

const blue = "#5094F8";

const grayWhite = "#F5F4F5"; // almost white
const graySidebar = "#EAEAEB"; // sidebar background
const grayBorder = "#DEDEDE"; // window borders
const graySelected = "#ABABAB"; // sidebar selected row
const graySegment = "#6c6c6c"; // segmented control, format bar controls
const grayText = "#232323"; // sidebar dark text, sidebar control

const borderRadius = 5;

const searchField = {
    textColor: grayText,
    controlColor: grayText,
    pressedControlColor: blue,
    backgroundColor: white,
    borderColor: grayBorder,
    placeholderColor: grayBorder,
};

const selectedRow = {
    selectedRowBgColor: grayBorder,
    selectedTextColor: grayText,
    selectedIconColor: grayText,
    selectedDetailColor: graySegment,
};

const emphasizedRow = {
    emphasizedRowBgColor: blue,
    emphasizedTextColor: white,
    emphasizedIconColor: white,
    emphasizedDetailColor: grayBorder,
};

module.exports = {
    name: "Custom Better",

    data: {
        mainWindow: {
            divider: {
                topColor: grayBorder,
                middleColor: grayBorder,
                bottomColor: grayBorder,
            },
        },

        sidebar: {
            topBar: {
                backgroundColor: graySidebar,
                bottomBorderColor: graySidebar,
                segmentedControl: {
                    tintColor: graySegment,
                    borderWidth: 2,
                    borderRadius,
                },
            },

            table: {
                backgroundColor: graySidebar,
                textColor: grayText,
                iconColor: grayText,

                ...selectedRow,

                ...emphasizedRow,
            },

            bottomBar: {
                backgroundColor: graySidebar,
                topBorderColor: graySidebar,
                textColor: grayText,
                controlColor: grayText,
                pressedControlColor: blue,
            },
        },

        noteList: {
            topBar: {
                backgroundColor: graySidebar,
                bottomBorderColor: graySidebar,
                controlColor: grayText,
                pressedControlColor: blue,
            },

            tableHeader: {
                backgroundColor: graySidebar,
                bottomBorderColor: grayBorder,
                controlColor: grayText,
                pressedControlColor: blue,
            },

            table: {
                backgroundColor: grayWhite,
                separatorColor: grayWhite,
                draggedRowBgColor: blue,
                emptyTextColor: graySelected,

                rowBgColor: grayWhite,
                altRowBgColor: grayWhite,
                iconColor: grayText,
                textColor: grayText,
                detailColor: graySegment,

                ...selectedRow,

                ...emphasizedRow,
            },

            bottomBar: {
                backgroundColor: grayWhite,
                searchField,
            },
        },

        noteView: {
            backgroundColor: grayWhite,
            dividerColor: grayBorder,

            topBar: {
                backgroundColor: graySidebar,
                bottomBorderColor: grayBorder,
                controlColor: graySegment,
                pressedControlColor: blue,
                segmentedControl: {
                    tintColor: graySegment,
                    borderWidth: 2,
                    borderRadius,
                },
            },

            toolbar: {
                backgroundColor: graySidebar,
                dividerColor: grayBorder,
                middleDividerColor: grayBorder,

                controlColor: graySegment,
                pressedControlColor: blue,
                iconColor: graySegment,
                textColor: graySegment,

                popUpButton: {
                    titleColor: graySegment,
                    borderColor: graySegment,
                },

                formatBar: {
                    controlColor: graySegment,
                    highlightColor: blue,
                },

                tagField: {
                    textColor: graySegment,
                    placeholderColor: graySegment,
                    tag: {
                        textColor: grayText,
                        selectedTextColor: grayText,
                        backgroundColor: graySelected,
                        selectedBackgroundColor: blue,
                        borderRadius,
                    },
                },

                searchField,

                doneButton: {
                    textColor: grayText,
                    highlightBackgroundColor: graySelected,
                    borderColor: grayBorder,
                },
            },

            bottomBar: {
                backgroundColor: grayWhite,
                controlColor: graySelected,
                pressedControlColor: blue,
            },
        },
        multiNote: {
            backgroundColor: graySidebar,
            textColor: grayText,

            button: {
                tintColor: grayText,

                backgroundColor: graySidebar,
                borderColor: grayBorder,

                highlightColor: graySidebar,
                highlightBackgroundColor: blue,
                highlightBorderColor: blue,
            },
            tagField: {
                textColor: grayText,
                placeholderColor: grayBorder,
                tag: {
                    textColor: grayText,
                    selectedTextColor: grayText,
                    backgroundColor: graySelected,
                    selectedBackgroundColor: blue,
                    borderRadius,
                },
                backgroundColor: white,
                borderColor: grayBorder,
                borderRadius: 3,
            },
        },
        notebookPicker: {
            backgroundColor: graySidebar,
            dividerColor: graySelected,
            textColor: grayText,

            searchField,

            table: {
                textColor: grayText,
                iconColor: grayText,

                ...selectedRow,

                ...emphasizedRow,

                emptyTextColor: graySegment,
            },
        },
        searchView: {
            backgroundColor: graySidebar,

            searchField,

            tableHeader: {
                backgroundColor: graySidebar,
                topBorderColor: grayBorder,
                bottomBorderColor: grayBorder,
                textColor: grayText,
                controlColor: grayText,
                pressedControlColor: blue,
            },

            table: {
                separatorColor: grayBorder,
                emptyTextColor: graySelected,

                rowBgColor: graySidebar,
                altRowBgColor: graySidebar,
                iconColor: grayText,
                textColor: grayText,
                detailColor: graySegment,

                ...selectedRow,

                ...emphasizedRow,
                emphasizedDetailColor: grayWhite,
            },
        },

        presentation: {
            backgroundColor: grayWhite,
        },

        editor: {
            codeCellTheme: "tomorrow",
            markdownCellTheme: "tomorrow",
        },
        css: {
            className: "custom",
            editor: "",
            preview: "",
            presentation: "",
        },

    },
};
