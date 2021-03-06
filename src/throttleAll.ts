import throttle = require('lodash/throttle');

import { DecoratorConfig, DecoratorFactory, LodashMethodDecorator } from './factory';
import { PreValueApplicator } from './applicators';
import { ThrottleOptions } from './shared';

export const ThrottleAll: (wait?: number, options?: ThrottleOptions) => LodashMethodDecorator = DecoratorFactory.createDecorator(
  new DecoratorConfig(throttle, new PreValueApplicator(), { setter: true })
);
export { ThrottleAll as throttleAll };
export default ThrottleAll;
