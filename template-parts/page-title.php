<?php // Get proper title

if ( is_home() ) {
	$heading_field    = get_field( 'hero_heading', get_option( 'page_for_posts' ) );
	$subheading_field = get_field( 'hero_subheading', get_option( 'page_for_posts' ) );
} else {
	$heading_field    = get_field( 'hero_heading' );
	$subheading_field = get_field( 'hero_subheading' );
}

switch ( true ) {
	case $heading_field:
		$page_title = $heading_field;
		break;
	case is_home():
		$page_title = get_the_title( get_option( 'page_for_posts' ) );
		break;
	case is_archive():
		$page_title = get_the_archive_title();
		break;
	case is_404():
		$page_title = '404: Page Not Found';
		break;
	default:
		$page_title = get_the_title();
		break;
}

if ( is_singular( 'post' ) ) {
	$page_subtitle = tlh_get_byline();
} else {
	$page_subtitle = $subheading_field;
}

	$page_title_modifiers = '';
if ( get_field( 'hero_background_image' ) || is_singular( 'post' ) || is_archive() ) {
	$page_title_modifiers .= ' pageTitle--image';
}
if ( is_home() && get_field( 'hero_background_image', get_option( 'page_for_posts' ) ) ) {
	$page_title_modifiers .= ' pageTitle--image page';
}
if ( get_field( 'hero_center' ) ) {
	$page_title_modifiers .= ' pageTitle--center';
}


?>

<header class="pageTitle<?php echo $page_title_modifiers; ?>">
	<div class="pageTitle__wrapper wrapLg">
	<h1 class="pageTitle__heading"><?php echo $page_title; ?></h1>
		<?php if ( $page_subtitle ) { ?>
			<span class="pageTitle__subheading"><?php echo $page_subtitle; ?></span>
		<?php } ?>
  </div>
</header>
<?php
if ( is_singular( 'post' ) ) {
	tlh_responsive_bg_style( '.pageTitle--image', get_post_thumbnail_id() );
} elseif ( is_home() ) {
	$header_bg_image = get_field( 'hero_background_image', get_option( 'page_for_posts' ) );
	tlh_responsive_bg_style( '.pageTitle--image', $header_bg_image['ID'] );
} else {
	$header_bg_image = get_field( 'hero_background_image' );
	tlh_responsive_bg_style( '.pageTitle--image', $header_bg_image['ID'] );
} ?>
