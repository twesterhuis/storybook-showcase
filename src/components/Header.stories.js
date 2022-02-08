import Header from './Header.vue';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => ({
  components: { Header },
  template: '<Header />',
});

export const Default = Template.bind({});