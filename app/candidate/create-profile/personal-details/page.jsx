import { NextBtn } from "@/app/ui/formFields/FormControls";
import { FileInputGroup, FormGroupHeader, InputGroup } from "@/app/ui/formFields/InputFields";

const PersonalDetails = () => {
  return (
    <>
      <FormGroupHeader text="Personal Details" />
      <InputGroup
        id="fullname"
        text="Full Name"
        placeholder="Shibu Dhara"
        coins={5}
      />
      <InputGroup
        id="mobile"
        text="Mobile"
        type="number"
        placeholder="9876543210"
        coins={15}
      />

      <FileInputGroup
        id="profilepic"
        text="Profile pic"
        coins={5}
        placeholder="Upload profile picture"
      />

      <InputGroup
        id="linkedin"
        text="Linked link"
        placeholder="https://abc/linked/"
        coins={3}
      />
      <InputGroup
        id="github"
        text="Github link"
        placeholder="https://abc/github/"
        coins={5}
      />
      <FileInputGroup
        id="resume"
        text="Resume"
        coins={20}
        placeholder="Upload your resume"
      />
      <div className="flex justify-end text-slate-950">
        <NextBtn path="/create-profile/education-details" />
      </div>
    </>
  );
};

export default PersonalDetails;
