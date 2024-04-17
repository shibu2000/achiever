import {
  InputGroup,
  InputTextArea,
  SelectInputGroup,
} from "@/app/ui/candidate/createProfile/formGroups/Groups";
import Editor from "@/app/ui/editor/Editor";
import InputRadio from "@/app/ui/formFields/InputRadio";
import InputWithSuggestion from "@/app/ui/formFields/InputWithSuggestion";

const AddNewJob = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="md:w-2/3 md:p-0 p-5 mx-auto">
        <h1 className="text-center py-3 _textGold text-4xl font-kalam-regular border-b _borderClassicBetween">
          Add new job
        </h1>
        <form action="" className="space-y-3">
          <InputGroup
            id="role"
            text="Job role"
            placeholder="eg. React developer"
          />
          <InputGroup
            id="location"
            text="Job location"
            placeholder="eg. Salt lake, kolkata"
          />
          <InputWithSuggestion
            id="skills"
            text="Skills"
            placeholder="Seperate skills by comma"
          />
          <Editor
            id="job-details"
            text="Job details"
            placeholder="Write details here ..."
          />
          <InputRadio
            id="experience"
            text="Emperience"
            name="experience"
            options={["Experience", "Fresher"]}
          />
          <SelectInputGroup
            id="job-type"
            text="Job type"
            options={["Full time", "Part-time", "Contract"]}
          />
          <Editor
            id="other-req"
            text="Other requirements"
            placeholder="Write here"
          />
          <SelectInputGroup
            id="accomodation"
            text="Accomodation"
            options={["Yes", "No"]}
          />
          <div className="text-center">
            <button type="submit" className="_bgGold w-1/4 py-2 rounded-full _textClassic my-10 font-semibold active:_bgGoldSoft">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewJob;
