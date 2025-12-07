// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  textbookSidebar: [
    {
      type: 'category',
      label: 'Module 1: ROS 2 – Robotic Nervous System',
      link: {
        type: 'doc',
        id: 'module-1-ros2/index',
      },
      items: [
        'module-1-ros2/topic-1',
        'module-1-ros2/topic-2',
        'module-1-ros2/topic-3',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin – Gazebo & Unity',
      link: {
        type: 'doc',
        id: 'module-2-digital-twin/index',
      },
      items: [
        'module-2-digital-twin/topic-1',
        'module-2-digital-twin/topic-2',
        'module-2-digital-twin/topic-3',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: NVIDIA Isaac AI Brain',
      link: {
        type: 'doc',
        id: 'module-3-nvidia-isaac/index',
      },
      items: [
        'module-3-nvidia-isaac/topic-1',
        'module-3-nvidia-isaac/topic-2',
        'module-3-nvidia-isaac/topic-3',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      link: {
        type: 'doc',
        id: 'module-4-vla/index',
      },
      items: [
        'module-4-vla/topic-1',
        'module-4-vla/topic-2',
        'module-4-vla/topic-3',
      ],
    },
    {
      type: 'category',
      label: 'Capstone Project: Autonomous Humanoid Robot',
      link: {
        type: 'doc',
        id: 'capstone-project/index',
      },
      items: [
        'capstone-project/topic-1',
        'capstone-project/topic-2',
      ],
    },
  ],
};

export default sidebars;