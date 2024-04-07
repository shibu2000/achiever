import {
  InputGroup,
  InputTextArea,
  SelectInputGroup,
} from "@/app/ui/home/createProfile/formGroups/Groups";

const OrganizationDetails = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="w-2/3 p-2 mx-auto space-y-5">
        <h1 className="text-center py-3 _textGold text-4xl font-kalam-regular border-b _borderClassicBetween">
          Organization details
        </h1>
        <div className="space-y-3">
          <InputGroup
            id="orgname"
            text="Organization name"
            placeholder="Company name"
          />
          <InputTextArea
            id="orgdesc"
            text="Organization description"
            height="h-32"
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
        </div>
      </div>
    </div>
  );
};

export default OrganizationDetails;
