export const field_parameters = [
  {
    mainText: "CDD (Course outline + LOs)",
    comment: "(please indicate how many CDDs have you created)",
    state_name: "CDD_CoLOs",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = (parseFloat(value) * 2).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Lesson materials collection",
    comment: "(please indicate the number of words)",
    state_name: "Lmc",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = ((parseFloat(value) * 10) / 5000).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText:
      "Self-study materials preparation comment: (downloadable templates and solutions from scratch)",
    comment: "(please indicate how many templates you created)",
    state_name: "Ssmpc",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = (parseFloat(value) * 0.5).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Proofreading",
    comment: "(please indicate the number of words)",
    state_name: "Pr",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = ((parseFloat(value) * 2) / 5000).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Review on platform / Dry run",
    comment: "(please indicate the number of words)",
    state_name: "RonpDr",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = ((parseFloat(value) * 1.5) / 5000).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Video script creation comment: (from scratch)",
    comment: "(please indicate the number of words)",
    state_name: "Vscc",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = (parseFloat(value) / 300).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Voice-over",
    comment: "(please indicate the number of words)",
    state_name: "Vo",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = ((parseFloat(value) * 0.25) / 300).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Video creation: Screencast prepared by SME",
    comment: "(please indicate the number of words)",
    state_name: "VcSprbSME",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = ((parseFloat(value) * 0.5) / 300).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Video creation: Studio video with complex post-production",
    comment: "(please indicate the number of words)",
    state_name: "VcSvwcpp",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = (parseFloat(value) / 300).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Test creation: Knowledge-based",
    comment: "(please indicate the number of questions)",
    state_name: "TcKb",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = (parseFloat(value) * 0.5).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Test creation: Case-based",
    comment: "(please indicate the number of cases)",
    state_name: "TcCb",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = (parseFloat(value) * 0.25).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Autocode task creation: Complex comment: (100 and more minutes)",
    comment: "(please indicate the number of tasks)",
    state_name: "AtcCc",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = (parseFloat(value) * 12).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Autocode task creation: Moderate comment: (up to 100 minutes)",
    comment: "(please indicate the number of tasks)",
    state_name: "AtcMc",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = (parseFloat(value) * 7).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText: "Autocode task creation: Simple comment: (up to 45 minutes)",
    comment: "(please indicate the number of tasks)",
    state_name: "AtcSc",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = (parseFloat(value) * 4).toFixed(1);
      result = result.toString();
      return result;
    },
  },
  {
    mainText:
      "Creation of task rated by experts comment: (with evaluation criteria)",
    comment:
      "(please indicate the number of study hours required for the task)",
    state_name: "Cotrbec",
    counting_functions: (value) => {
      if (!value) {
        return "";
      }
      let result = (parseFloat(value) * 0.5).toFixed(1);
      result = result.toString();
      return result;
    },
  },
];
