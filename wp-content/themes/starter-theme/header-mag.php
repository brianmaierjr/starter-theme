<!DOCTYPE html>
<html <?php language_attributes(); ?>>

	<head>
		<meta charset="utf-8">

		<?php // force Internet Explorer to use the latest rendering engine available ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title><?php wp_title(''); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheedFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<?php get_template_part( 'template-parts/header/favicons' ); ?>

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>

		<?php require_once('css-injector/mag.php'); ?>

		<?php get_template_part( 'template-parts/header/tag_manager_script' ); ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<a class="skip-link" href="#content">Skip to content</a>
		<?php get_template_part( 'template-parts/header/tag_manager_iframe' ); ?>

		<div id="container" class="container">

		<header class="header-mag" role="banner" itemscope itemtype="http://schema.org/WPHeader">

			<div class="wrap header-mag__nav-container">
				<a class="header-mag__logo" href="<?php echo home_url(); ?>" rel="nofollow" title="Go to the <?php bloginfo( 'name' ); ?> Homepage ">
					<?php $school_logo = get_field('school_logo', 'options');
					if ( $school_logo ) { ?>
						<img src="<?php echo $school_logo['url']; ?>" width="240" height="80" alt="<?php echo $school_logo['alt']; ?>">
					<?php } else { ?>
						<span><?php the_field( 'school_name', 'options' ); ?></span>
						<?php } ?>
				</a>
				<nav class="header-mag__nav" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
					<?php wp_nav_menu(array(
										 'container' => false,                           // remove nav container
										 'menu' => __( 'MAG Menu', 'tlh_theme' ),  // nav name
										 'menu_class' => 'nav',               // adding custom nav class
										 'theme_location' => 'mag',                 // where it's located in the theme
										 'depth' => 0			                               // limit the depth of the nav
					)); ?>
				</nav>
				<?php if ( is_page_template( 'page-templates/mag__degrees.php' ) ) { ?>
					<a class="button button--shadow get-started-button" href="#get-started">Get Started <?php tlh_icon( 'angle-right', 'inline' ); ?></a>
				<?php } ?>
			</div>

		</header>