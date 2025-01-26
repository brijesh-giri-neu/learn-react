import { GalleryProps } from "@/types/gallery";
import { AvatarProps } from "@/types/avatar";
import { ListItemProps } from "@/types/listItem";

function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + '.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function ListItem({ label, content }: ListItemProps) {
  return (
    <li>
      <b>{label}: </b>
      {content.includes(",") !== false ? <b>{content.split(",").length}</b> : null} {content}
    </li>
  );
}

function Profile({scientist, size = 100} : GalleryProps) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <Avatar person={{ 
        name: scientist.name, 
        imageId: scientist.imageId 
      }} size={size} />
      <ul>
        <ListItem label="Profession" content={scientist.profession} />
        <ListItem label="Awards" content={scientist.awards} />
        <ListItem label="Discovered" content={scientist.discovery} />
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile scientist={{
        name: 'Maria Skłodowska-Curie',
        imageId: 'szV5sdG',
        profession: 'physicist and chemist',
        awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
        discovery: 'polonium (element)'
      }} size={70} />

      <Profile scientist={{
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2s',
        profession: 'geochemist',
        awards: 'Miyake Prize for geochemistry, Tanaka Prize',
        discovery: 'a method for measuring carbon dioxide in seawater'
      }} size={70} />
    </div>
  );
}