import { ComponentProps } from 'react';

import cs from './DescriptionList.module.scss';

export const DescriptionList = (props: ComponentProps<'dl'>) => (
  <dl className={cs.grid} {...props} />
);
