import { BackBtn, NextBtn } from "@/app/ui/candidate/createProfile/formControls/FormControls";
import { FormGroupHeader, InputGroup, SelectInputGroup } from "@/app/ui/candidate/createProfile/formGroups/Groups";


const EducationDetails = () => {
  return (
    <>
      <FormGroupHeader text="Education Details" addBtn={true} />

      <SelectInputGroup
        id="educationType"
        text="Education type"
        coins={5}
        options={["schcool", "college", "university"]}
      />

      <InputGroup
        id="instituteName"
        text="School/college/university name"
        placeholder="Budge Budge Institute of Technology "
        coins={5}
      />
      <div className="flex justify-evenly">
        <InputGroup id="startDate" text="Start date" type="date" coins={2} />
        <InputGroup id="endDate" text="End date" type="date" coins={2} />
      </div>
      <div className="flex items-center justify-around text-slate-950">
        <BackBtn path="/create-profile/personal-details" />
        <NextBtn path="/create-profile/project-details" />
      </div>
    </>
  );
};

export default EducationDetails;
