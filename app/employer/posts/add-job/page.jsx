import { addJob } from "@/app/lib/action/employer";
import Editor from "@/app/ui/editor/Editor";
import InputRadio from "@/app/ui/formFields/InputRadio";
import InputWithSuggestion from "@/app/ui/formFields/InputWithSuggestion";
import { InputGroup, SelectInputGroup } from "@/app/ui/formFields/inputFields";

const AddNewJob = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="md:w-2/3 md:p-0 p-5 mx-auto">
        <h1 className="text-center py-3 _textGold text-4xl font-kalam-regular border-b _borderClassicBetween">
          Add new job
        </h1>
        <form action={addJob} className="space-y-3">
          <SelectInputGroup
            id="category"
            text="Select job category"
            name="category"
            options={[
              "IT",
              "Software",
              "Hardware",
              "Business",
              "Networking",
              "Sales",
              "General",
              "Manager",
              "Medical",
              "Security",
              "Management",
              "Shop",
            ]}
          />
          <InputGroup
            id="jobrole"
            name="jobrole"
            text="Job role"
            placeholder="eg. React developer"
          />
          <InputGroup
            id="job_loc"
            name="job_loc"
            text="Job location"
            placeholder="eg. Salt lake, kolkata"
          />
          <InputWithSuggestion
            id="skills"
            text="Skills"
            name="skills"
            placeholder="Seperate skills by comma"
          />
          <InputGroup
            id="salary"
            name="salary"
            text="CTC"
            placeholder="15000 - 150000/month"
          />
          <Editor
            id="job-details"
            name="job_details"
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
            id="job_type"
            name="job_type"
            text="Job type"
            options={["Full time", "Part-time", "Contract"]}
          />
          <Editor
            id="other_req"
            name="other_req"
            text="Other requirements"
            placeholder="Write here"
          />
          <SelectInputGroup
            id="accomodation"
            name="accomodation"
            text="Accomodation"
            options={["Yes", "No"]}
          />
          <div className="text-center">
            <button
              type="submit"
              className="_bgGold w-1/4 py-2 rounded-full _textClassic my-10 font-semibold active:_bgGoldSoft"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewJob;
