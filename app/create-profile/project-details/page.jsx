import { BackBtn, NextBtn } from "@/app/ui/home/createProfile/formControls/FormControls";
import {
  FormGroupHeader,
  InputGroup,
  SelectInputGroup,
} from "@/app/ui/home/createProfile/formGroups/Groups";
import { TbCoinRupee } from "react-icons/tb";

const ProjectDetails = () => {
  return (
    <>
      <FormGroupHeader text="Project Details" addBtn={true} />
      <InputGroup
        id="projetName"
        text="Project name"
        placeholder="My todo app"
        coins={5}
      />

      <div className="input-group">
        <div className="flex items-end justify-between px-1">
          <label htmlFor="projetDescription">Project Description</label>
          <div className="text-sm flex items-center gap-2">
            <TbCoinRupee className="text-yellow-500" />
            <span>6</span>
          </div>
        </div>
        <textarea
          id="projetDescription"
          type="text"
          className="input-field h-24"
          placeholder="Project description ..."
        />
      </div>

      <SelectInputGroup
        id="projectType"
        text="Project type"
        coins={4}
        options={["solo", "group"]}
      />
      <InputGroup
        id="projectLink"
        text="Project link"
        placeholder="https://www.tasktracking.netlify.app"
        coins={10}
      />
      <div className="flex items-center justify-around text-slate-950">
        <BackBtn path="/create-profile/education-details" />
        <NextBtn path="/create-profile/experience-details" />
      </div>
    </>
  );
};

export default ProjectDetails;
