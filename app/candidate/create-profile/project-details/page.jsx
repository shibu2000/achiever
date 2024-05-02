import { BackBtn, NextBtn } from "@/app/ui/formFields/FormControls";
import { FormGroupHeader, InputGroup, InputTextArea, SelectInputGroup } from "@/app/ui/formFields/InputFields";

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

      <InputTextArea
        id="projdesc"
        text="Project description"
        coins={6}
        placeholder="Describe your project here ..."
      />

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
