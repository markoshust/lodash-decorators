import negate = require('lodash/negate');

import {
  DecoratorConfig,
  DecoratorFactory,
  LodashDecorator,
  ResolvableFunction
} from './factory';
import { PartialValueApplicator } from './applicators';

export const Negate: (fn?: ResolvableFunction) => LodashDecorator = DecoratorFactory.createInstanceDecorator(
  new DecoratorConfig(negate, new PartialValueApplicator(), { property: true })
);
export { Negate as negate };
export default Negate;
