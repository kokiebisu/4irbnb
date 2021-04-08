import { useSearchbar } from './logic';
import { SearchbarPrototypeTemplate } from './template';

export interface PrototypeProps {
  expanded?: boolean;
  setExpanded?: any;
  type?: any;
  setCategory?: any;
  transparent?: boolean;
}

export const Prototype: React.FC<PrototypeProps> = ({
  type,
  setCategory,
  transparent = false,
  expanded,
  setExpanded,
}) => {
  const data = useSearchbar();

  return (
    <SearchbarPrototypeTemplate
      type={type}
      setCategory={setCategory}
      transparent={transparent}
      expanded={expanded}
      setExpanded={setExpanded}
      {...data}
    />
  );
};
