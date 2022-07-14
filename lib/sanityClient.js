import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5stc5ji1',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skIUdArxmhH9o3YYTUYfMuuTesCrV3LkDpxcHrKghupPyEF4xd0aE8z0zffdEW5SS7Ce8DHLvBu3RVbh4UhOFbbXHnMj9Asv00gICiZoGljdfGZDqqEPT7Go5NtuWvE3AHLclfJA1GfqzBFt5S6XrCLy3R4M7MQPuPbb3YTaX1e8xSwAmKyX',
  useCdn: false,
})
