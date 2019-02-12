/**
 * Create by Le Trong on 11/Feb/2019
 */

import Enzyme, {
  configure, shallow, mount, render
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export { shallow, mount, render };
export default Enzyme;
