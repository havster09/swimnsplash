import Post from './models/post';

export default function () {
  Post.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const post1 = new Post({ name: 'Admin', title: 'In The Deep Swim School', slug: 'in-the-deep-swim-school', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: `test` });

    Post.create([post1], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
