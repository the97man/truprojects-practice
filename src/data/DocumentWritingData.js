import DRILLBIT from "../assets/DRILLBIT.png";
import PLAGIARISMCHECKER from "../assets/PLAGIARISMCHECKER.png";
import TURNITIN from "../assets/TURNITIN.png";
import WRITECHECK from "../assets/WRITECHECK.png";

export const DocumentWritingData = {
  plagiarism: [
    { label: "Research Papers" },
    { label: "M-Tech final Documents" },
    { label: "B-Tech final Documents" },
  ],

  steps: [
    { step: 1, title: "Understand the context" },
    { step: 2, title: "Properly quote the paraphrase" },
    { step: 3, title: "Identify what does and does not need to be cited" },
    { step: 4, title: "Manage your citations" },
    {
      step: 5,
      title: "Citing your own material",
    },
    { step: 6, title: "Keep track of your sources" },
    { step: 7, title: "Referencing" },
    { step: 8, title: "Use plagiarism checkers" },
    { step: 9, title: "Support plagiarism report" },
  ],

  images: [
    {
      src: DRILLBIT,
      alt: "ASC",
    },
    {
      src: PLAGIARISMCHECKER,
      alt: "I2OR",
    },
    {
      src: TURNITIN,
      alt: "IJAEMA",
    },

    {
      src: WRITECHECK,
      alt: "IJAENT",
    },
  ],
};
