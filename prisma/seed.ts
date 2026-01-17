import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@hasberabbi.com' },
    update: {},
    create: {
      email: 'admin@hasberabbi.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
    },
  });

  console.log('✅ Admin user created:', admin.email);

  // Create categories
  const categories = [
    { name: 'Visa', slug: 'visa' },
    { name: 'Umrah', slug: 'umrah' },
    { name: 'Hajj', slug: 'hajj' },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  console.log('✅ Categories created');

  // Create countries
  const countries = [
    { name: 'Pakistan', slug: 'pakistan' },
    { name: 'India', slug: 'india' },
    { name: 'Bangladesh', slug: 'bangladesh' },
    { name: 'Saudi Arabia', slug: 'saudi-arabia' },
    { name: 'UAE', slug: 'uae' },
    { name: 'USA', slug: 'usa' },
    { name: 'UK', slug: 'uk' },
    { name: 'Canada', slug: 'canada' },
  ];

  for (const country of countries) {
    await prisma.country.upsert({
      where: { slug: country.slug },
      update: {},
      create: country,
    });
  }

  console.log('✅ Countries created');
  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });