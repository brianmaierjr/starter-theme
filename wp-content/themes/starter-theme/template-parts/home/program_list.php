<div class="program-list">
  <div class="program-list__text">
    <h2>Undergraduate Programs</h2>
    <p><?php echo term_description( '4', 'degree_level' ) ?>
  </div>
  <div class="program-list-container">
    <?php $loop = new WP_Query( array(
        'post_type' => 'degrees',
        'posts_per_page' => -1,
        'degree_level' => 'undergraduate',
        'orderby' => 'name',
        'order'   => 'ASC'
    ) ); ?>
    <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
    <?php $tax_terms = get_the_terms($post->ID, 'degree_level'); ?>
      <article class="card program-card mix<?php if ( is_array( $tax_terms ) ) { foreach ( $tax_terms as $tax_term ) { echo ' ' . $tax_term->slug; } } ?>" role="article" itemscope itemtype="http://schema.org/BlogPosting">
          <a href="<?php the_permalink(); ?>">
            <span class="program-card__image">
              <?php
                $image = get_field('hero_background_image');
                $card = $image['sizes'][ 'medium' ];
                $alt = $image['alt'];
              ?>
              <img src="<?php echo $card; ?>" alt="<?php echo $alt; ?>">
            </span>
            <span class="h4 program-card__name"><?php the_field('program__short-name'); ?></span>
            <span class="program-card__excerpt"><?php the_field('program_summary'); ?></span>
            <span class="program-card__button button">View Program Information</span>
          </a>
      </article>
    <?php endwhile; wp_reset_query(); ?>
  </div>
</div>

<div class="program-list">
  <div class="program-list__text">
    <h2>Graduate Programs</h2>
    <p><?php echo term_description( '3', 'degree_level' ) ?>
  </div>
  <div class="program-list-container">
    <?php $loop = new WP_Query( array(
        'post_type' => 'degrees',
        'posts_per_page' => -1,
        'degree_level' => 'graduate',
        'orderby' => 'name',
        'order'   => 'ASC'
    ) ); ?>
    <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
      <?php $tax_terms = get_the_terms($post->ID, 'degree_level'); ?>
        <article class="card program-card mix<?php if ( is_array( $tax_terms ) ) { foreach ( $tax_terms as $tax_term ) { echo ' ' . $tax_term->slug; } } ?>" role="article" itemscope itemtype="http://schema.org/BlogPosting">
            <a href="<?php the_permalink(); ?>">
              <span class="program-card__image">
                <?php
                  $image = get_field('hero_background_image');
                  $card = $image['sizes'][ 'medium' ];
                  $alt = $image['alt'];
                ?>
                <img src="<?php echo $card; ?>" alt="<?php echo $alt; ?>">
              </span>
              <span class="h4 program-card__name"><?php the_field('program__short-name'); ?></span>
              <span class="program-card__excerpt"><?php the_field('program_summary'); ?></span>
              <span class="program-card__button button">View Program Information</span>
            </a>
        </article>
      <?php endwhile; wp_reset_query(); ?>
    </div>
</div>