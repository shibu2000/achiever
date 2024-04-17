import { BackBtn, SaveBtn } from "@/app/ui/candidate/createProfile/formControls/FormControls";
import { FormGroupHeader, InputGroup, InputTextArea, SelectInputGroup } from "@/app/ui/candidate/createProfile/formGroups/Groups";

const ExperienceDetails = () => {
  return (
    <>
      <FormGroupHeader text="Past Experience Details" addBtn={true} />
      <SelectInputGroup
        id="experienceType"
        text="Experience type"
        coins={5}
        options={["internship", "job", "contractual"]}
      />
      <InputGroup
        id="companyName"
        text="Company name"
        placeholder="xyz pvt. ltd."
        coins={10}
      />
      <InputGroup
        id="companySite"
        text="Company website link"
        placeholder="https://xyz-pvt-ltd.com/xhsxndsjqk"
        coins={10}
      />
      <InputGroup
        id="role"
        text="Role"
        placeholder="administration/sde/jr. developer/etc."
        coins={8}
      />
      <div className="flex justify-evenly">
        <InputGroup id="startDate" text="Start date" type="date" coins={2} />
        <InputGroup id="endDate" text="End date" type="date" coins={2} />
      </div>
      <InputTextArea
        id="coverletter"
        text="Cover letter"
        placeholder="Add your cover letter ..."
        coins={20}
      />
      <div className="flex items-center justify-around text-slate-950">
        <BackBtn path="/create-profile/project-details" />
        <SaveBtn />
      </div>
    </>
  );
};

export default ExperienceDetails;
