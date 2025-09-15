import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

async function setupContactsCollection() {
  try {
    console.log('Setting up PocketBase contacts collection...');

    // First, check if the collection already exists
    try {
      const collection = await pb.collections.getOne('contacts');
      console.log('Contacts collection already exists:', collection.name);
      return;
    } catch (error) {
      // Collection doesn't exist, create it
      console.log('Creating contacts collection...');
    }

    // Create the contacts collection
    const collection = await pb.collections.create({
      name: 'contacts',
      type: 'base',
      schema: [
        {
          name: 'name',
          type: 'text',
          required: true,
          options: {
            max: 255
          }
        },
        {
          name: 'email',
          type: 'email',
          required: true
        },
        {
          name: 'message',
          type: 'text',
          required: true,
          options: {
            max: 2000
          }
        }
      ],
      listRule: null, // Only admins can list all contacts
      viewRule: null, // Only admins can view individual contacts
      createRule: '', // Anyone can create a contact (public form)
      updateRule: null, // Only admins can update
      deleteRule: null, // Only admins can delete
    });

    console.log('Successfully created contacts collection:', collection.name);

  } catch (error) {
    console.error('Error setting up contacts collection:', error);
  }
}

// Run setup
setupContactsCollection();