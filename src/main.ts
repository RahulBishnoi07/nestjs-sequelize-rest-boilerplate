import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SpelunkerModule } from 'nestjs-spelunker';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  console.log(SpelunkerModule.explore(app)); //Normal Mode

  //Graphical Mode to check circular dependencies
  const tree = SpelunkerModule.explore(app);
  const root = SpelunkerModule.graph(tree);
  const edges = SpelunkerModule.findGraphEdges(root);
  console.log('graph LR');
  const mermaidEdges = edges.map(
    ({ from, to }) => `  ${from.module.name}-->${to.module.name}`,
  );
  console.log(mermaidEdges.join('\n'));
  //copy the output of this console and paste is to given link to check all circular dependencies
  //https://mermaid.live/edit

  await app.listen(3000);
}
bootstrap();
