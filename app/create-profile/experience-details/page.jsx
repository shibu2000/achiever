import { BackBtn, SaveBtn } from "@/app/ui/home/createProfile/formControls/FormControls";
import {
  FormGroupHeader,
  InputGroup,
  SelectInputGroup,
} from "@/app/ui/home/createProfile/formGroups/Groups";
import { TbCoinRupee } from "react-icons/tb";

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
      <div className="input-group">
        <div className="flex items-end justify-between px-1">
          <label htmlFor="projetDescription">Cover letter</label>
          <div className="text-sm flex items-center gap-2">
            <TbCoinRupee className="text-yellow-500" />
            <span>20</span>
          </div>
        </div>
        <textarea
          id="cverLetter"
          type="text"
          className="input-field h-24"
          placeholder="Add your cover letter ..."
        />
      </div>
      <div className="flex items-center justify-around text-slate-950">
        <BackBtn path="/create-profile/project-details" />
        <SaveBtn />
      </div>
    </>
  );
};

export default ExperienceDetails;
