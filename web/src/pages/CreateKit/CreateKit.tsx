import PageHeader from "components/shared/PageHeader";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";

const CreateKit = () => {
  // TODO:
  // -> type can be custom
  // -> type cannot conflict with normal types

  return (
    <div className="pl-12 pr-12 text-center">
      <div className="container m-auto text-left">
        <PageHeader title="New kit" />
        <div>Tracks</div>
        <div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="type">Type</Label>
            <Input type="text" id="type" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="audio">audio upload</Label>
            <Input id="audio" type="file" />
          </div>
          <div>salvar</div>
        </div>
      </div>
    </div>
  );
};

export default CreateKit;
