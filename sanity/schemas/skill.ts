import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      description: 'Category of skill',
      type: 'string',
    },
    {
      name: 'isShowcase',
      title: 'Showcase?',
      type: 'boolean',
    },
    {
      name: 'level',
      title: 'Level',
      description: 'Level of skill: Learning, Novice, Intermediate, Advanced',
      type: 'string',
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0 to 100%',
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'background',
      title: 'Background',
      description: 'A brief point on your experience with the technology',
      type: 'string',
    },
    {
      name: 'usedCases',
      title: 'UsedCases',
      description: 'A task you accomplished using the technology',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'usedProjects',
      title: 'UsedProjects',
      description: 'Projects you used this technology in',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'usedWork',
      title: 'UsedWork',
      description: 'A job where you used this technology',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})
