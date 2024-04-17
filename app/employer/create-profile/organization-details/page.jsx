import { SaveBtn } from "@/app/ui/candidate/createProfile/formControls/FormControls";
import {
  FileInputGroup,
  InputGroup,
  InputTextArea,
  SelectInputGroup,
} from "@/app/ui/candidate/createProfile/formGroups/Groups";

const OrganizationDetails = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="w-2/3 p-2 mx-auto space-y-5">
        <h1 className="text-center py-3 _textGold text-4xl font-kalam-regular border-b _borderClassicBetween">
          Organization details
        </h1>
        <form action="" className="space-y-3">
          <InputGroup
            id="orgname"
            text="Organization name"
            placeholder="Company name"
          />
          <InputTextArea
            id="orgdesc"
            text="Organization description"
            height="h-32"
            placeholder="Write description here..."
          />
          <InputGroup
            id="orglocation"
            text="Organization location"
            placeholder="Kolkata"
          />
          <SelectInputGroup
            id="industryType"
            text="Industry type"
            options={["IT", "Medical", "Institute", "Chemical Factory", "Shop"]}
          />
          <FileInputGroup
            id="orgLogo"
            text="Organization logo"
            placeholder="Upload logo"
          />
          <InputGroup
            id="websiteLink"
            text="Organization website link/URL"
            placeholder="www.company-url.com"
          />
          <div className="flex justify-center py-3">
            <SaveBtn />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrganizationDetails;
