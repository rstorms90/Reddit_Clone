import { MigrationInterface, QueryRunner } from 'typeorm';

export class MockPosts1609789553119 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Zatoichi''s Flashing Sword (Zatôichi abare tako) (Zatôichi 7)', 'In congue. Etiam justo. Etiam pretium iaculis justo.

    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-11-21T15:41:00Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Slaughter', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-12-13T23:02:10Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Get Smart', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-03-08T04:01:55Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Gold Diggers: The Secret of Bear Mountain', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-02-29T15:03:41Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Super, The', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-08-16T11:29:30Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Girl of Your Dreams, The (Niña de tus ojos, La)', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-02-19T21:05:34Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Fudoh: The New Generation (Gokudô sengokushi: Fudô)', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2020-03-20T23:37:24Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Bordertown', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-01-21T16:59:03Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Eddy Duchin Story, The', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-07-08T08:07:47Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Nursery University', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-08-08T13:07:55Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Alice Doesn''t Live Here Anymore', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2020-05-15T22:08:24Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('1000 Journals', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-05-07T08:24:20Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Squirm', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2020-02-16T20:36:07Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Fast and the Furious, The', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2020-04-25T13:28:23Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('How Much Wood Would a Woodchuck Chuck (Beobachtungen zu einer neuen Sprache)', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2020-08-26T19:32:56Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Poseidon Adventure, The ', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2020-09-22T08:34:52Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Ama lur (Tierra Madre)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-03-27T08:54:28Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('The Vanishing American', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2020-02-21T05:41:10Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Children in the Wind (Kaze no naka no kodomo)', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-11-01T08:20:08Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Ruby Sparks', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-08-15T02:52:53Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Another Me', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2020-03-03T00:00:46Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('From Here to Eternity', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2020-11-26T16:58:07Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Iris', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-09-02T18:39:29Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Soundbreaker ', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2020-05-16T15:21:36Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Lock, Stock & Two Smoking Barrels', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-05-05T16:46:46Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Lap Dance', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-11-23T19:52:30Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Joe', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2020-09-18T13:58:41Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('25 Watts', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-09-24T19:41:23Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Carey Treatment, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2020-04-21T15:34:19Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('When the Road Bends: Tales of a Gypsy Caravan', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-03-23T23:35:14Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('House Is Black, The', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-05-22T08:25:04Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Faces of Death 6', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2020-12-16T10:19:10Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Come On, Rangers', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-08-29T21:08:36Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Shoot the Piano Player (Tirez sur le pianiste)', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-02-29T23:46:59Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Soulless', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2020-11-09T16:32:34Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('High, Wide, and Handsome', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2020-06-09T19:31:23Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Master, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-07-07T18:22:55Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Serenity', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-09-26T05:06:36Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Somersault', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-03-26T11:46:24Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('What Have They Done to Your Daughters?', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2020-06-18T19:29:50Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('From Above', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2020-12-19T12:14:25Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Time of Eve (Eve no jikan)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-08-01T01:46:46Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Faster', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2020-09-23T06:34:01Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Casual Relations', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-01-22T00:31:16Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Long Goodbye, The', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-12-02T22:41:06Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Gate of Heavenly Peace, The', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-03-15T18:21:23Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Majestic, The', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-08-07T15:34:30Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Whisper', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-11-03T16:06:45Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('P.U.N.K.S', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-12-16T14:57:37Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('North to Alaska', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-04-17T15:04:32Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Vertical Limit', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-01-29T15:59:27Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Wild Bees, The (Divoké vcely)', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-04-18T16:39:41Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Object of My Affection, The', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2020-05-20T02:09:50Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Virtuality', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-04-16T23:01:04Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Haunt', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-02-06T01:34:57Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Grown Ups 2', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-10-02T08:25:03Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Return to House on Haunted Hill', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-06-28T10:15:09Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Tart', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-08-13T03:35:24Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Dear Wendy', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2020-01-11T13:25:13Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Mysterious Object at Noon (Dokfa nai meuman)', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-04-18T01:48:14Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Arrowsmith', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-11-11T02:12:01Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Thoroughly Modern Millie', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2021-01-01T11:28:54Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Kisses for My President', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-10-03T19:53:57Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Erendira', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-06-29T13:39:06Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Control Room', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-07-15T17:35:42Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Saint of Fort Washington, The', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-08-25T12:59:36Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Dirty Money (Un flic)', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-10-24T08:46:31Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Mr Hockey The Gordie Howe Story', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-12-21T11:28:46Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Thousand Months, A (Mille mois)', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-03-27T04:33:13Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Zatoichi', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2020-09-12T10:40:49Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Rambo (Rambo 4)', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2020-03-21T15:06:30Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Duel', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2020-08-30T05:53:26Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Hangman''s House', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2020-11-18T06:09:24Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Two Men in Manhattan (Deux hommes dans Manhattan)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-09-11T01:08:18Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('23 Paces to Baker Street', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2021-01-01T13:22:47Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Ceremony, The (Gishiki)', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-06-02T19:35:40Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Two-Way Stretch', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2020-01-10T09:42:04Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('My Father''s Glory (La gloire de mon père)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2020-04-16T12:15:25Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Black on White (Mustaa valkoisella)', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2020-01-20T12:43:04Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('3 Needles', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2021-01-02T03:22:03Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Damsels in Distress', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-12-04T16:42:22Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Must Read After My Death', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-01-01T14:25:45Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Big Momma''s House', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-10-14T10:21:30Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Santa''s Apprentice', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-02-05T10:31:51Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Duo (Pas de deux)', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2020-11-09T17:43:34Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Blood Moon', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-08-17T17:16:32Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Moonlight Murder', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-01-08T08:33:15Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('One Wonderful Sunday (Subarashiki nichiyobi)', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-06-04T02:30:12Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Home Song Stories, The', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2020-01-05T00:16:29Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Man Without a Face, The', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2020-09-14T07:47:59Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Beneath the Rooftops of Paris (Sous les toits de Paris)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-04-11T23:50:11Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('TINY: A Story About Living Small', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-04-18T22:19:02Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Shamrock Handicap, The', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2020-11-13T13:21:26Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Prey for Rock & Roll', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2020-12-24T14:47:24Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Yuki & Nina', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-04-14T03:25:03Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Six Degrees of Separation', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-07-13T20:20:35Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Planet Terror', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-08-08T07:27:25Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Cabin in the Sky', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-06-25T17:36:48Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Reparando', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-09-21T15:28:13Z');
    insert into MOCK_DATA (title, text, "creatorId", "createdAt") values ('Glass House, The', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2020-04-15T07:48:07Z');
    `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
