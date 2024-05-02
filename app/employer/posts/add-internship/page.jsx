import { addInternship } from "@/app/lib/action/employer";
import Editor from "@/app/ui/editor/Editor";
import { InputGroup, SelectInputGroup } from "@/app/ui/formFields/InputFields";
import InputWithSuggestion from "@/app/ui/formFields/InputWithSuggestion";

const AddNewInternship = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="md:w-2/3 md:p-0 p-5 mx-auto">
        <h1 className="text-center py-3 _textGold text-4xl font-kalam-regular border-b _borderClassicBetween">
          Add new job
        </h1>
        <form action={addInternship} className="space-y-3">
          <SelectInputGroup
            id="category"
            text="Category"
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
            placeholder="Select Internship Category"
          />
          <InputGroup
            id="role"
            name="role"
            text="Role"
            placeholder="eg. React Intern"
          />
          <InputGroup
            id="location"
            name="location"
            text="Location"
            placeholder="eg. Salt lake, kolkata"
          />
          <InputWithSuggestion
            id="skills"
            text="Required skills"
            name="skills"
            placeholder="Enter your known technology"
          />
          <InputGroup
            id="stipend"
            name="stipend"
            text="Stipend"
            placeholder="15000/month"
          />
          <Editor
            id="responsibilities"
            name="responsibilities"
            text="Responsibilities"
            placeholder="Write details here ..."
          />
          <SelectInputGroup
            id="internship_duration"
            name="internship_duration"
            text="Internship duration"
            options={["0 - 6 month", "6 month - 1 year", "> 1 year"]}
          />
          <Editor
            id="other_details"
            name="other_details"
            text="Other Details"
            placeholder="Write down here"
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

export default AddNewInternship;
