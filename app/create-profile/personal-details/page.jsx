import {
  BackBtn,
  NextBtn,
} from "@/app/ui/home/createProfile/formControls/FormControls";
import {
  FormGroupHeader,
  InputGroup,
} from "@/app/ui/home/createProfile/formGroups/Groups";
import { TbCoinRupee } from "react-icons/tb";

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
      {/*  */}
      <div className="input-group">
        <div className="flex items-end justify-between px-1">
          <label htmlFor="profile-pic">Profile pic:</label>
          <div className="text-sm flex items-center gap-2">
            <TbCoinRupee className="text-yellow-500" />
            <span>5</span>
          </div>
        </div>
        <label htmlFor="profile-pic" className="input-field text-slate-400">
          Select profile picture
        </label>
        <input hidden id="profile-pic" type="file" className="input-field" />
      </div>
      {/*  */}
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
      {/*  */}
      <div className="input-group">
        <div className="flex items-end justify-between px-1">
          <label htmlFor="resume">Resume:</label>
          <div className="text-sm flex items-center gap-2">
            <TbCoinRupee className="text-yellow-500" />
            <span>20</span>
          </div>
        </div>
        <label htmlFor="resume" className="input-field text-slate-400">
          Upload your resume:
        </label>
        <input hidden id="resume" type="file" />
      </div>
      <div className="flex justify-end text-slate-950">
        <NextBtn path="/create-profile/education-details" />
      </div>
    </>
  );
};

export default PersonalDetails;
