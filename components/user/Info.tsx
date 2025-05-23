import { Typography } from '../ui/Typography';
import { Avatar } from './Avatar';

export const UserRow = ({ name }: { name: string }) => {
  if (!name) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 hover-link">
      <Typography.Text size="small" color="muted">
        By {name}
      </Typography.Text>
    </div>
  );
};

export const UserInfoAvatar = ({
  name,
  sub,
  avatar,
}: {
  name: string;
  sub: string;
  avatar?: string;
}) => {
  if (!name || !sub) return null;

  return (
    <div className="flex items-center gap-4">
      <Avatar url={avatar} />
      <div className="flex flex-col">
        <Typography.Text size="small" strong>
          {name}
        </Typography.Text>
        <Typography.Text size="small" color="muted">
          {sub}
        </Typography.Text>
      </div>
    </div>
  );
};
